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
var btn = className("android.widget.Button").text("Open App").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Open App");
  sleep(random(2000, 3000));
}

//android.widget.TextView[@text="Start"]
btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Start");
  sleep(random(5000, 6000));
}

sleep(random(6900, 9000));

//android.widget.TextView[@text="START NOW"]
btn = className("android.widget.TextView").text("START NOW").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click START NOW");
  sleep(random(2000, 3000));
}

//android.widget.TextView[@text="CLAIM"]
btn = className("android.widget.TextView").text("CLAIM").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();