var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/TonChurchBot/app?startapp=ref_21ExrA2THrSwp8xTY"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="Start"]
btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onElementClick(btn, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.TextView[@text="INCREASE FAITH "]
btn = className("android.widget.TextView").textContains("INCREASE FAITH").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onElementClick(btn, "Click CLAIM");
  sleep(random(2500, 3900));
  utils.onElementClick(btn, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();