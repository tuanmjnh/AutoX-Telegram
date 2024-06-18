var path = "./test.js";
if (!files.exists(path)) {
  toast("Script file does not exist: " + path);
  exit();
}
// floaty window
if (!floaty.checkPermission()) {
  // If there is no floating window permission, prompt the user and jump the request
  toast("This script requires floating window permission to display the floating window. Please allow it in the subsequent interface and re-run this script.");
  floaty.requestPermission();
  exit();
} else {
  toastLog('Already have floating window permission');
}

var isPlay = false
var window = floaty.window(
  <frame>
    <vertical id="layout" layout_gravity="left" bg="#33000000" w="30" padding="0 8">
      {/* <button id="action" text="Start running" w="90" h="40" bg="#77ffffff" /> */}
      {/* <button id="action" text="Start running" /> */}
      <ImageButton id="btnStart" src="@drawable/ic_play_circle_outline_black_48dp" w="30" h="30" scaleType="centerCrop" background="#00000000" />
      {/* <button id="exit" text="Close" /> */}
      <ImageButton id="btnClose" src="@drawable/ic_close_black_48dp" w="30" h="30" scaleType="centerCrop" background="#00000000" />
    </vertical>
  </frame>
);

window.setPosition(0, device.height / 2)
// window.setSize(100, 500)

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
      if (cbActionUp) cbActionUp()
      return true;
  }
}
window.layout.setOnTouchListener(function (view, event) {
  moveInsideDevice(event);
  return true;
});

window.btnStart.setOnTouchListener(function (view, event) {
  moveInsideDevice(event, () => {
    // If the offset is small when the finger is lifted, it is judged as a click
    if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
      onStart();
    }
  });
  return true;
});

window.btnClose.setOnTouchListener(function (view, event) {
  moveInsideDevice(event, () => {
    // If the offset is small when the finger is lifted, it is judged as a click
    if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
      onClose();
    }
  });
  return true;
});

function onStart() {
  if (!isPlay) {
    execution = engines.execScriptFile(path);
    window.btnStart.setImageResource(android.R.drawable.ic_stop_black_48dp);
    // window.btnStart.setText('Stop running');
  } else {
    if (execution) {
      execution.getEngine().forceStop();
    }
    window.btnStart.setImageResource(android.R.drawable.ic_play_circle_outline_black_48dp);
    // window.btnStart.setText('Start running');
  }
}

function onClose() {
  window.close()
  floaty.closeAll()
}

window.btnStart.setColorFilter(android.graphics.Color.parseColor("#0397d9"));
window.btnClose.setColorFilter(android.graphics.Color.parseColor("#b80b2d"));