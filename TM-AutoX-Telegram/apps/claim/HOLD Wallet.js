var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/holdwallet_bot/app?startapp=DH014F916C09"
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

for (let i = 0; i < 3; i++) {
  //swipe(startX, startY, endX, endY, duration);
  var x = random(220, 280)
  swipe(x, random(device.height / 1.2, device.height / 1.5), x, random(device.height / 2, device.height / 2.2), random(200, 600))
  sleep(random(1500, 2500))
}

//android.widget.TextView[@text="Storage"]
element = text("Storage").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Storage");
  sleep(random(2000, 3000));
}

//android.widget.Button[@text="Check NEWS"]
element = className("android.widget.Button").text("Check NEWS").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  var element = utils.onElementClick(element, "Click Check NEWS");
  sleep(random(2000, 3000));
  if (element) back();
}

//android.widget.Button[@text="Claim"]
element = className("android.widget.Button").text("Claim").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();