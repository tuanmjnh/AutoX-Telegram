var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/hexn_bot/app?startapp=24970197-240f-4d28-99f5-d2080655f745"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6900, 9000));

//android.widget.Button[@text="Claim"]
element = className("android.widget.Button").textContains("Claim").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(1500, 2000));
}

//android.widget.Button[@text="Start farming"]
element = className("android.widget.Button").textContains("Start farming").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Start farming");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();