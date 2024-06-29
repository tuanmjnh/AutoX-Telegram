var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/theYescoin_bot/Yescoin?startapp=aSx6vx"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

// //android.view.View[@content-desc="Bot menu"]
// var element = className("android.view.View").desc("Bot menu").findOne(5000);
// if (element) {
//   sleep(random(2000, 2900));
//   utils.onElementClick(element, "Click Open app");
// }

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.Button[@text="Open"]
element = className("android.widget.Button").text("Open").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Open Gift");
  sleep(random(1500, 2000));
}

//android.widget.Button[@text="Play Yescoin"]
element = className("android.widget.Button").text("Play Yescoin").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Play Yescoin");
  sleep(random(1500, 2000));
}

//android.widget.Button[@text="Play Yescoin"]
element = className("android.widget.Button").text("Play Yescoin").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Play Yescoin");
  sleep(random(1500, 2000));
}

//android.widget.Image[@text="popup-green-short-btn-BkZzUWOv"]
element = className("android.widget.Image").textContains("popup-green-short-btn").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(1500, 2000));
}

sleep(random(8000, 10000));
back();
//android.widget.TextView[@text="Close anyway"]
element = className("android.widget.TextView").text("Close anyway").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Close anyway");
  sleep(random(1500, 2000));
}