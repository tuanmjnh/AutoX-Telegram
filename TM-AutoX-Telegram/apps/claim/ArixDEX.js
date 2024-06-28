var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/ARIXcoin_bot?start=ref_5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2500, 3900));

//android.widget.Button[@text="🔨 Mining"]
var btns = className("android.widget.Button").textContains("Mining").find();
if (btns && btns.length) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btns[btns.length - 1], "Click Open app");
}

//android.widget.TextView[@text="Start"]
var btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Start");
}

sleep(random(6000, 8000));

//android.widget.TextView[@text="CLAIM"]
btn = className("android.widget.TextView").text("CLAIM").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click CLAIM");
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(1000, 2000));
back();