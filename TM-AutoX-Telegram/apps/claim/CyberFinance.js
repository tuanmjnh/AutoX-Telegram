var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/CyberFinanceBot?start=cj1UM1ppaG53cGhrSjAmdT1yZWY="
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
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Open app");
}

//android.widget.TextView[@text="Start"]
element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6900, 9000));

//android.widget.Button[@text="Claim Points"]
element = className("android.widget.Button").text("Claim Points").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim Points");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(1000, 2000));
back();