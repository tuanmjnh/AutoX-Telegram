var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/Prickgame_bot?start=ref-pmqpNxmgBQvHHZWKAXtgUt"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.Button[@text="Game/Task 🎮"])[2]
var elements = className("android.widget.Button").textContains("Game/Task").find();
if (elements && elements.length) {
  sleep(random(2000, 2900));
  utils.onElementClick(elements[elements.length - 1], "Click Start App");
}

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.Button[@text="tap me"]
element = className("android.widget.Button").text("tap me").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  threads.start(() => {
    while (true) {
      utils.onElementMultipleGesture(element, 5, { min: 10, max: 20 }, -15)//, "Click Multiple Icon");
    }
  })
  sleep(random(20000, 25000));
  threads.shutDownAll();
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();