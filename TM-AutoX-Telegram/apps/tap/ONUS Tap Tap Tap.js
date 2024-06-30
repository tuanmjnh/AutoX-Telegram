var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/onus_tap_tap_tap_bot?start=1725115309460"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.Button[@text="Start App"])[2]
var elements = className("android.widget.Button").textContains("Start App").find();
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

//android.widget.TextView[@text="Have fun, have ONX!"]
element = className("android.widget.TextView").text("Have fun, have ONX!").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click");
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click");
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click");
  sleep(random(1500, 2000));
}

//android.widget.Image[@text="icon"])[2]
// [262, 846][819, 1403]
elements = className("android.widget.Image").text("icon").find();
if (elements && elements.length > 1) {
  sleep(random(1500, 2000));
  threads.start(() => {
    while (true) {
      utils.onElementMultipleGesture(elements[1], 5, { min: 10, max: 30 }, -15)//, "Click Multiple Icon");
    }
  })
  sleep(random(40000, 50000));
  threads.shutDownAll();

  //android.widget.TextView[@text="Claim"]
  element = className("android.widget.TextView").text("Claim").findOne(3000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Claim");
    sleep(random(1500, 2000));
  }

  //android.widget.TextView[@text="Keep tapping"]
  element = className("android.widget.TextView").text("Keep tapping").findOne(3000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Keep tapping");
    sleep(random(1500, 2000));
  }
}//android.widget.TextView[@text="Claim"]
element = className("android.widget.TextView").text("Claim").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(1500, 2000));
}

//android.widget.Image[@text="farm"]
element = className("android.widget.Image").text("farm").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Farm");
  sleep(random(1500, 2000));

  //android.widget.TextView[@text="Claim"]
  element = className("android.widget.TextView").text("Claim").findOne(3000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Claim");
    sleep(random(1500, 2000));
  }

  //android.widget.TextView[@text="Keep farming"]
  element = className("android.widget.TextView").text("Keep farming").findOne(3000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Keep farming");
    sleep(random(2900, 3900));
  }

  //android.widget.TextView[@text="Start new cycle"]
  element = className("android.widget.TextView").text("Start new cycle").findOne(3000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Start new cycle");
    sleep(random(1500, 2000));
  }
}

//android.widget.Image[@text="crew"]
element = className("android.widget.Image").text("crew").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click crew");
  sleep(random(1500, 2000));
  //android.widget.TextView[@text="Claim"]
  element = className("android.widget.TextView").text("Claim").findOne(5000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Claim");
    sleep(random(1500, 2000));
  }
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();