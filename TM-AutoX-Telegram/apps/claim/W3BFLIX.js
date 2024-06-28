var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/W3BFLIXBot?start=iv25fed1085b"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(600, 1000));

//android.widget.TextView[@text="Start"]
btn = className("android.widget.TextView").text("Start").findOne(2000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Start");
}

sleep(random(2000, 2900));

//android.widget.Button[@text="🤞 Daily Lucky Draw"]
btn = className("android.widget.Button").textContains("Daily Lucky Draw").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();