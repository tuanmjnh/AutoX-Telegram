var utils = require(files.path(`./utils.js`));
// The link you want to open in Telegram
var bot = "https://t.me/seed_coin_bot/app?startapp=5629897737";
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

sleep(random(6000, 8000));

//android.widget.Button[@text="CHECK NEWS"]
//className("android.widget.Button").text("CHECK NEWS").findOne();
element = className("android.widget.Button").text("CHECK NEWS").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  element = utils.onElementClick(element, "Click check news");
  sleep(random(2000, 3000));
  if (element) back();
}

//Claim
element = text("Claim").findOne(3000);
sleep(random(2000, 2900));
utils.onElementClick(element, "Claim");

//android.view.View[@resource-id="root"]/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[2]
var elements = className("android.widget.Button").find();
if (elements && elements.length > 1) {
  sleep(random(1000, 2000));
  utils.onElementClick(elements[1]);

  //android.widget.Button[@text="Day 36 0.01"]
  elements = className("android.widget.Button").textContains("Day ").find();
  for (let i = 0; i < elements.length; i++) {
    utils.onElementClick(elements[1]);
    sleep(random(1000, 1500));
  }
}

sleep(random(8000, 10000));
back();
