var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/vertus_app_bot/app?startapp=5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.TextView[@text="Storage"]
element = className("android.widget.TextView").text("Storage").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Storage");
  sleep(random(5000, 6000));
}

//android.widget.TextView[@text="Collect"]
element = className("android.widget.TextView").text("Collect").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Collect");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();