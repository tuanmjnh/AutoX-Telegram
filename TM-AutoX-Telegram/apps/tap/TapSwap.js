var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/tapswap_mirror_2_bot?start=r_5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="START"]
var element = className("android.widget.TextView").textContains("START").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click START");
  sleep(random(1500, 2000));
}

//android.widget.Button[@text="👋 Start now!"]
var elements = className("android.widget.Button").textContains("Start now").find();
if (elements && elements.length) {
  sleep(random(1500, 2000));
  utils.onElementClick(elements[elements.length - 1], "Click Play");
  sleep(random(1500, 2000));
}

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6900, 8000));

//android.widget.Button[@text="Get it!"]
element = className("android.widget.Button").text("Get it!").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(1500, 2000));
}

//android.widget.Image[@text="coin-Yc4kFV6s"]
element = className("android.widget.Image").textContains("coin-").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  threads.start(() => {
    while (true) {
      utils.onElementMultipleGesture(element, 5, { min: 10, max: 30 }, -20);//, "Click Multiple Icon");
    }
  })
  sleep(random(50000, 60000));
  threads.shutDownAll();
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();