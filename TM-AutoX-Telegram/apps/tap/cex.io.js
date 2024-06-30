var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/cexio_tap_bot?start=1716267380182186"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(3000, 5000));

//android.widget.Button[@text="Start app"]
var elements = className("android.widget.Button").textContains("Start app").find();
if (elements && elements.length) {
  sleep(random(2000, 2900));
  utils.onElementClick(elements[elements.length - 1], "Click Start App");
}

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.TextView[@text="100 taps left"]
element = className("android.widget.TextView").text("0 taps left").findOne(3000);
if (!element) {
  //android.view.View[@resource-id="root"]/android.view.View/android.widget.Button[1]
  // [254,977][829,1563]
  // Rect(254, 977 - 829, 1563)
  elements = className("android.widget.Button").find();
  if (elements && elements.length) {
    sleep(random(1500, 2000));
    threads.start(() => {
      while (true) {
        utils.onElementMultipleGesture(elements[0], 3, { min: 60, max: 90 }, -15)//, "Click Multiple Icon");
      }
    })
    sleep(random(26000, 30000));
    threads.shutDownAll();
  }

  //android.widget.Button[@text="Claim"]
  element = className("android.widget.Button").text("Claim").findOne(3000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Claim");
    sleep(random(1500, 2000));
  }
}

//android.widget.Button[@text="Farm"]
element = className("android.widget.Button").text("Farm").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Farm");
  sleep(random(2000, 3000));
}

//android.widget.Button[@text="Claim"]
element = className("android.widget.Button").text("Claim").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(2000, 3000));
}

//android.widget.Button[@text="Start farming era"]
element = className("android.widget.Button").textContains("Start farming").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Start farming");
  sleep(random(1500, 2000));
}

//android.widget.Button[@text="Squad"]
element = className("android.widget.Button").text("Squad").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(1500, 2000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();