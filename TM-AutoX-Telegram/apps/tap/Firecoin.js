var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/firecoin_app_bot/app?startapp=r_5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.Image[@resource-id="bgcoin"][text="coin"]
var elements = className("android.widget.Image").text("coin").find();
if (elements && elements.length > 1) {
  sleep(random(1500, 2000));
  threads.start(() => {
    while (true) {
      utils.onElementMultipleGesture(elements[elements.length - 1], 5, { min: 10, max: 30 })//, "Click Multiple Icon");
    }
  })
  sleep(random(40000, 50000));
  threads.shutDownAll();
}
sleep(random(2000, 3000));
back();