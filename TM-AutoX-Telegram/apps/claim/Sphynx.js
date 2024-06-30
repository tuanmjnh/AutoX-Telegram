var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/sphynxmeme_bot/bless?startapp=MqIyynLD"
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

sleep(random(8000, 10000));

//android.widget.Button[@text="Claim FREE"]
element = className("android.widget.Button").text("Claim FREE").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Claim FREE");
  sleep(random(3000, 6000));
}

//android.view.View[@content-desc="Claim"]
element = className("android.view.View").desc("Claim").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Claim mining");
  sleep(random(3000, 6000));
}

//android.widget.Button[@text="Claim"]
element = className("android.widget.Button").text("Claim").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Claim");
  sleep(random(3000, 6000));
}

//android.widget.Button[@text="Upgrade"]
element = className("android.widget.Button").text("Upgrade").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Upgrade");
  sleep(random(1000, 2000));
}

//android.widget.Button[@text="Confirm"]
element = className("android.widget.Button").text("Confirm").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Confirm");
  sleep(random(2000, 3000));
}

//android.widget.Button[@text="gf6NkiL5a0dfAAAAABJRU5ErkJggg=="]
element = className("android.widget.Button").text("gf6NkiL5a0dfAAAAABJRU5ErkJggg==").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Close");
  sleep(random(3000, 6000));
}

//android.widget.ImageView[@content-desc="Go back"]
element = className("android.widget.ImageView").desc("Go back").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Go Back");
  sleep(random(3000, 6000));
}

//android.widget.TextView[@text="Mission"]
element = className("android.widget.TextView").text("Mission").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Mission");
  sleep(random(3000, 6000));
}

for (let i = 0; i < 3; i++) {
  //swipe(startX, startY, endX, endY, duration);
  var x = random(220, 280)
  swipe(x, random(device.height / 1.2, device.height / 1.5), x, random(device.height / 2, device.height / 2.2), random(200, 600))
  sleep(random(1500, 2500))
}

//Task daily
//android.widget.Button[@text="Go"])[1]
var elements = className("android.widget.Button").text("Go").find();
sleep(random(600, 1000));
if (elements && elements.length) {
  for (let i = 0; i < elements.length; i++) {
    utils.onElementClick(elements[i], `Click task daily ${i}`);
    sleep(random(5000, 6000));
    back();
    sleep(random(1500, 2500));
    // utils.onElementClick(element, "Click Go Back");
    // sleep(random(5000, 6000));
  }
}

//android.widget.ImageView[@content-desc="Go back"]
element = className("android.widget.ImageView").desc("Go back").findOne(3000);
if (element) {
  sleep(random(600, 1000));
  utils.onElementClick(element, "Click Go Back");
  sleep(random(3000, 6000));
}

//android.widget.ImageView[@content-desc="Go back"]
element = className("android.widget.ImageView").desc("Go back").findOne(3000);
if (element) {
  sleep(random(600, 1000));
  utils.onElementClick(element, "Click Go Back");
  sleep(random(3000, 6000));
}