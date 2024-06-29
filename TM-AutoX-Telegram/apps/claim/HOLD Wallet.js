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
var btn = className("android.widget.TextView").text("Start").findOne(3000);
if (btn) {
  sleep(random(1000, 2000));
  utils.onElementClick(btn, "Click Start");
}

sleep(random(5000, 6000));

for (let i = 0; i < 3; i++) {
  //swipe(startX, startY, endX, endY, duration);
  var x = random(220, 280)
  swipe(x, random(device.height / 1.2, device.height / 1.5), x, random(device.height / 2, device.height / 2.2), random(200, 600))
  sleep(random(1500, 2500))
}

//android.widget.TextView[@text="Storage"]
btn = className("android.widget.TextView").text("Storage").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onElementClick(btn, "Click Storage");
  sleep(random(5000, 6000));
}

//android.widget.Button[@text="Claim"]
btn = className("android.widget.Button").text("Claim").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onElementClick(btn, "Click Claim");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();