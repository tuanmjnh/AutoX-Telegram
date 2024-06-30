var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/wcoin_tapbot?start=NTYyOTg5NzczNw=="
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.Button[@text="Play 🫵🏻"]
var elements = className("android.widget.Button").textContains("Play").find();
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

//android.widget.Button[@text="Claim"]
element = className("android.widget.Button").text("Claim").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(1500, 2000));
}

//android.view.View[@resource-id="root"]/android.view.View/android.widget.Button
//[183,1014][897,1728]
elements = className("android.widget.Button").find();
if (elements && elements.length) {
  sleep(random(1500, 2000));
  threads.start(() => {
    while (true) {
      utils.onElementMultipleGesture(elements[elements.length - 1], 5, { min: 10, max: 30 }, -20);//, "Click Multiple Icon");
    }
  })
  sleep(random(50000, 55000));
  threads.shutDownAll();
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();