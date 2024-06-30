var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/NOTMEMEAppBot?start=kknsvh"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.Button[@text="Open App"])[2]
var element = className("android.widget.Button").text("Open App").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Open App");
  sleep(random(2000, 3000));
}

//android.widget.TextView[@text="Start"]
element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Start");
  sleep(random(5000, 6000));
}

sleep(random(6900, 9000));

//android.widget.TextView[@text="START NOW"]
element = className("android.widget.TextView").text("START NOW").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click START NOW");
  sleep(random(2000, 3000));
}

//android.widget.TextView[@text="CLAIM"]
element = className("android.widget.TextView").text("CLAIM").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();