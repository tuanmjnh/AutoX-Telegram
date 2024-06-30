var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/snapster_bot?start=5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(6900, 9000));

//android.widget.Button[@text="🚀 open mini app"])[2]
var elements = className("android.widget.Button").textContains("open mini app").find();
if (elements && elements.length) {
  sleep(random(2000, 2900));
  utils.onElementClick(elements[elements.length - 1], "Click Open app");
}

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.Button[@text="icon Daily Claim Claim 1000 points every 24h"]
element = className("android.widget.Button").textContains("Daily Claim Claim").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(3900, 5000));
}

sleep(random(1500, 2000));
back();
sleep(random(1500, 2000));
back();