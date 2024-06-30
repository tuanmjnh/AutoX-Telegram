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
var elements = className("android.widget.Button").textContains("Mining").find();
if (elements && elements.length) {
  sleep(random(2000, 2900));
  utils.onElementClick(elements[elements.length - 1], "Click Open app");
}

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6000, 8000));

//android.widget.TextView[@text="CLAIM"]
element = className("android.widget.TextView").text("CLAIM").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click CLAIM");
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(1000, 2000));
back();