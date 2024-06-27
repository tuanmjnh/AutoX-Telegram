var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/ARIXcoin_bot?start=ref_5629897737"
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(8000, 10000));

//android.widget.TextView[@text="Start"]
btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Open app");
  sleep(random(5000, 6000));
}

//android.widget.Button[@text="🔨 Mining"]
var btn = className("android.widget.Button").textContains("Mining").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Open app");
  sleep(random(5000, 6000));
}

//android.view.View[@text="CLAIM"]
btn = className("android.view.View").text("CLAIM").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(1000, 2000));
back();