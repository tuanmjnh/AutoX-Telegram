var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/TonChurchBot/app?startapp=ref_21ExrA2THrSwp8xTY"
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

sleep(random(5000, 6000));

//android.widget.TextView[@text="INCREASE FAITH "]
element = className("android.widget.TextView").textContains("INCREASE FAITH").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click CLAIM");
  sleep(random(2500, 3900));
  utils.onElementClick(element, "Click CLAIM");
  sleep(random(5000, 6000));
} else {
  //android.widget.TextView[@text="PRAY"])[1]
  element = className("android.widget.TextView").textContains("PRAY").findOne(5000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click PRAY");
    sleep(random(5000, 6000));
  }
}

sleep(random(2000, 3000));
back();