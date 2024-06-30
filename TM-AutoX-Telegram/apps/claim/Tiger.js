var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/TigerNetwork_bot?start=r_PXAHGG"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.Button[@text="👉 Play 🎁"]
var elements = className("android.widget.Button").text("👉 Play 🎁").find();
if (elements && elements.length) {
  sleep(random(2000, 2900));
  utils.onElementClick(elements[elements.length - 1], "Click Play");
}

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6000, 8000));

//android.widget.TextView[@text="Starting"]
element = className("android.widget.TextView").textContains("Start").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Start mining");
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Start mining");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();