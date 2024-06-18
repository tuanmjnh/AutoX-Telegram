var utils = require("./utils.js");
// floaty window
if (!floaty.checkPermission()) {
  // If there is no floating window permission, prompt the user and jump the request
  toast("This script requires floating window permission to display the floating window. Please allow it in the subsequent interface and re-run this script.");
  floaty.requestPermission();
  exit();
} //else {
//   toastLog('Already have floating window permission');
// }

if (!requestScreenCapture()) toast("Screenshot request failed")

var window = floaty.window(
  <frame>
    <vertical id="layout" layout_gravity="left" bg="#33000000" w="30" padding="0 8">
      {/* <button id="action" text="Start running" w="90" h="40" bg="#77ffffff" /> */}
      {/* <button id="action" text="Start running" /> */}
      <ImageButton id="btnStart" src="@drawable/ic_play_circle_outline_black_48dp" w="30" h="30" scaleType="centerCrop" background="#00000000" />
      <ImageButton id="btnStop" src="@drawable/ic_stop_black_48dp" w="30" h="30" scaleType="centerCrop" background="#00000000" visibility="gone" />
      {/* <button id="exit" text="Close" /> */}
      <ImageButton id="btnClose" src="@drawable/ic_close_black_48dp" w="30" h="30" scaleType="centerCrop" background="#00000000" />
    </vertical>
  </frame>
);

window.setPosition(0, device.height / 2)
// window.setSize(100, 500)

window.btnStart.setColorFilter(android.graphics.Color.parseColor("#0397d9"));
window.btnStop.setColorFilter(android.graphics.Color.parseColor("#d65801"));
window.btnClose.setColorFilter(android.graphics.Color.parseColor("#b80b2d"));

setInterval(() => { }, 1000);

var execution = null;

//Record the touch coordinates when the button is pressed
var x = 0, y = 0;
//Record the floating window position when the button is pressed
var windowX, windowY;
//Record the time the button is pressed to determine long press and other actions
var downTime;

var moveInsideDevice = (event, cbActionUp) => {
  switch (event.getAction()) {
    case event.ACTION_DOWN:
      x = event.getRawX();
      y = event.getRawY();
      windowX = window.getX();
      windowY = window.getY();
      downTime = event.getEventTime();
      return true;
    case event.ACTION_MOVE:
      // Calculate the difference in coordinates
      var dx = event.getRawX() - x;
      var dy = event.getRawY() - y;
      // Calculate new position
      var newX = windowX + dx;
      var newY = windowY + dy;

      // Ensure the new position is within the screen bounds
      newX = Math.max(0, Math.min(newX, device.width - window.layout.getWidth()));
      newY = Math.max(0, Math.min(newY, device.height - window.getHeight()));

      // Update the window position
      window.setPosition(newX, newY);
      return true;
    case event.ACTION_UP:
      if (cbActionUp) {
        if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
          cbActionUp()
        }
      }
      return true;
  }
}

var storage = storages.create("apps");
var storageApps = storage.get("apps");
var isDestroyed = false
var isPlay = false
var indexApp = 0
var repeat = 0
var engine = null
var engineMain = engines.myEngine()
const all = engines.all()
// log(all)

var onStop = () => {
  isPlay = false
  indexApp = 0
  repeat = 0
  const all = engines.all()
  all.forEach(item => {
    // log(item)
    if (item.id != engineMain.id) {
      // log(item.id)
      item.forceStop()
    }
  });
}

var onStart = (apps) => {
  isPlay = true
  threads.start(() => {
    try {
      sleep(2000)
      while (isPlay) {
        var file = files.join(apps[indexApp].p, apps[indexApp].k)
        log(`Running: ${file}`)
        sleep(1000)
        engine = engines.execScriptFile(file)//,{ delay: 5000, interval:, loopTimes: 0 }
        isDestroyed = utils.isDestroyedEngine(engine, 5000)
        while (!isDestroyed) {
          sleep(2000)
        }
        indexApp++
        if (indexApp >= apps.length) {
          indexApp = 0
          repeat++
          log(`Repeat: ${repeat}`)
          sleep(10000)
        }
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  })
};

window.layout.setOnTouchListener(function (view, event) {
  moveInsideDevice(event);
  return true;
});

window.btnStart.setOnTouchListener(function (view, event) {
  moveInsideDevice(event, () => {
    var apps = storageApps.claim.concat(storageApps.tap).filter(x => x.c)
    onStart(apps)
    window.btnStop.setVisibility(android.view.View.VISIBLE);
    window.btnStart.setVisibility(android.view.View.GONE);
  });
  return true;
});

window.btnStop.setOnTouchListener(function (view, event) {
  moveInsideDevice(event, () => {
    onStop()
    window.btnStart.setVisibility(android.view.View.VISIBLE);
    window.btnStop.setVisibility(android.view.View.GONE);
  });
  return true;
});

window.btnClose.setOnTouchListener(function (view, event) {
  moveInsideDevice(event, () => {
    // If the offset is small when the finger is lifted, it is judged as a click
    engines.stopAllAndToast();
    window.close();
    floaty.closeAll();
  });
  return true;
});