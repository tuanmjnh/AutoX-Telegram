var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/Simple_Tap_Bot?start=1717465746885"
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
element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.TextView[@text="Collect 25 824 SMPL"]
element = className("android.widget.TextView").textContains("Collect").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Collect");
  sleep(random(1500, 2000));
}

//android.widget.TextView[@text="Start farming"]
element = className("android.widget.TextView").textContains("Start farming").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start farming");
  sleep(random(1500, 2000));
}

//android.widget.TextView[@text="Fortune"]
element = className("android.widget.TextView").text("Fortune").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Fortune");
  sleep(random(1500, 2000));
  back();
}

//android.widget.Image[@text="coin"]
element = className("android.widget.Image").text("coin").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  threads.start(() => {
    while (true) {
      utils.onElementMultipleGesture(element, 5, { min: 10, max: 30 }, -15)//, "Click Multiple Icon");
    }
  })
  sleep(random(50000, 60000));
  threads.shutDownAll();
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();