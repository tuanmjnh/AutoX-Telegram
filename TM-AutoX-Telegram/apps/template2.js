var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/ARIXcoin_bot?start=ref_5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.view.View[@content-desc="Bot menu"]
var element = className("android.view.View").desc("Bot menu").findOne(5000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Open app");
}

//android.widget.TextView[@text="Start"]
element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.view.View[@text="CLAIM"]
element = className("android.view.View").text("CLAIM").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();