var utils = require(files.path(`./utils.js`));
// The link you want to open in Telegram
var bot = "https://t.me/pixelversexyzbot?start=5629897737";
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
auto.waitFor();
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="Start"]
var btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Start");
}

sleep(random(6000, 8000));
// new UiSelector().description("Bot menu")
//android.view.View[@content-desc="Bot menu"]
btn = className("android.view.View").desc("Bot menu").findOne(3000);
if (btn) {
  sleep(random(1000, 2000));
  utils.onButtonClick(btn, "Click menu");
  sleep(random(4000, 6000));
}

//android.widget.Button[@text="4:05:13 304,850 CLAIM"]
btn = className("android.widget.Button").textContains("CLAIM").findOne(5000);
if (btn) {
  sleep(random(1000, 2000));
  utils.onButtonClick(btn, "Click claim");
}
sleep(random(8000, 10000));
back();
sleep(random(1500, 3000));
//android.widget.TextView[@text="Close anyway"]
btn = className("android.widget.TextView").text("Close anyway").findOne(5000);
utils.onButtonClick(btn, "Click Close anyway");
sleep(random(1500, 3000));
back();