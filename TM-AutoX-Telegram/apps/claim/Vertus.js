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
var btn = className("android.widget.TextView").text("Start").findOne(3000);
if (btn) {
  sleep(random(1000, 2000));
  utils.onElementClick(btn, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.TextView[@text="Storage"]
btn = className("android.widget.TextView").text("Storage").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onElementClick(btn, "Click Storage");
  sleep(random(5000, 6000));
}

//android.widget.TextView[@text="Collect"]
btn = className("android.widget.TextView").text("Collect").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onElementClick(btn, "Click Collect");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();