var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/MatchQuestBot/start?startapp=fdfc42ee215c1aedc71e7be12051dc0f"
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

sleep(random(6000, 8000));

//android.widget.TextView[@text="Claim"]
element = className("android.widget.TextView").text("Claim").findOne(3000);
if (element) {
  sleep(random(600, 1000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(3000, 6000));
}

//android.widget.TextView[@text="Start Farming"]
element = className("android.widget.TextView").text("Start Farming").findOne(3000);
if (element) {
  sleep(random(600, 1000));
  utils.onElementClick(element, "Click Start Farming");
  sleep(random(3000, 6000));
}

//android.widget.TextView[@text="Friends"]
element = className("android.widget.TextView").text("Friends").findOne(5000);
if (element) {
  sleep(random(600, 1000));
  utils.onElementClick(element, "Click Friends");
  sleep(random(3000, 6000));
}

//android.widget.TextView[@text="Claim"]
element = className("android.widget.TextView").text("Claim").findOne(5000);
if (element) {
  sleep(random(600, 1000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(3000, 6000));
}

sleep(random(1500, 3000));
back();