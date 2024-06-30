var utils = require(files.path(`./utils.js`));
// The link you want to open in Telegram
var bot = "https://t.me/pixelversexyzbot?start=5629897737";
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
auto.waitFor();
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

// new UiSelector().description("Bot menu")
//android.view.View[@content-desc="Bot menu"]
var element = className("android.view.View").desc("Bot menu").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click menu");
}

//android.widget.TextView[@text="Start"]
element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(2000, 3000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6000, 8000));

//android.widget.Button[@text="4:05:13 304,850 CLAIM"]
element = className("android.widget.Button").textContains("CLAIM").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click claim");
}
element = className("android.widget.Button").textContains("FULL").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click claim");
}

sleep(random(5000, 6000));
back();
sleep(random(1500, 3000));
//android.widget.TextView[@text="Close anyway"]
element = className("android.widget.TextView").text("Close anyway").findOne(5000);
utils.onElementClick(element, "Click Close anyway");
sleep(random(1500, 3000));
back();