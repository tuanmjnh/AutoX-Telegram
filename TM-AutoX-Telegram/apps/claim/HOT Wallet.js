var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/herewalletbot/app?startapp=3626599"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6900, 9000));

//android.widget.TextView[@text="Home"]
element = className("android.widget.TextView").text("Home").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Home");
  sleep(random(5000, 6000));
}
//android.widget.TextView[@text="Storage"]
element = className("android.widget.TextView").text("Storage").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Storage");
  sleep(random(5000, 6000));
} else {
  for (let i = 0; i < 6; i++) {
    //swipe(startX, startY, endX, endY, duration);
    var x = random(200, 250)
    swipe(x, random(600, 800), x, random(230, 250), random(200, 600))
    sleep(random(1500, 2500))
  }
  element = text("Storage").findOne(5000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Storage");
    sleep(random(5000, 6000));
  }
}

//android.widget.Button[@text="Check NEWS"]
element = className("android.widget.Button").text("Check NEWS").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Check NEWS");
  sleep(random(1500, 2000));
  back();
}

//android.widget.Button[@text="Claim HOT"]
element = className("android.widget.Button").text("Claim HOT").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim HOT");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();

//android.widget.TextView[@text="Close anyway"]
element = className("android.widget.TextView").text("Close anyway").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Close anyway");
  sleep(random(1500, 2000));
}