var utils = require(files.path(`./utils.js`));
// The link you want to open in Telegram
var bot = "https://t.me/pixelversexyzbot?start=5629897737";
//Screenshot request
if (!requestScreenCapture()) toast("Screenshot request failed");
auto.waitFor();
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(4000, 6000));
// new UiSelector().description("Bot menu")
//android.view.View[@content-desc="Bot menu"]
var btn = className("android.view.View").desc("Bot menu").findOne(3000);
var cbtn = null;
if (btn) {
  sleep(random(1000, 2000));
  cbtn = utils.onButtonClick(btn, "Click menu");
  sleep(random(4000, 6000));
}

//android.widget.Button[@text="4:05:13 304,850 CLAIM"]
btn = className("android.widget.Button").textContains("CLAIM").findOne(5000);
if (btn) {
  sleep(random(1000, 2000));
  cbtn = utils.onButtonClick(btn, "Click claim");
}
sleep(random(8000, 10000));
back();
sleep(random(1500, 3000));
//android.widget.TextView[@text="Close anyway"]
btn = className("android.widget.TextView").text("Close anyway").findOne(5000);
cbtn = utils.onButtonClick(btn, "Click Close anyway");
sleep(random(1500, 3000));
back();