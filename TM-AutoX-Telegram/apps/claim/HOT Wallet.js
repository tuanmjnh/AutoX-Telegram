var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/herewalletbot/app?startapp=3626599"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="Start"]
var btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Start");
}

sleep(random(6900, 9000));

//android.widget.TextView[@text="Home"]
btn = className("android.widget.TextView").text("Home").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Home");
  sleep(random(5000, 6000));
}
//android.widget.TextView[@text="Storage"]
btn = className("android.widget.TextView").text("Storage").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Storage");
  sleep(random(5000, 6000));
} else {
  for (let i = 0; i < 6; i++) {
    //swipe(startX, startY, endX, endY, duration);
    var x = random(200, 250)
    swipe(x, random(600, 800), x, random(230, 250), random(200, 600))
    sleep(random(1500, 2500))
  }
  btn = className("android.widget.TextView").text("Storage").findOne(5000);
  if (btn) {
    sleep(random(1500, 2000));
    utils.onButtonClick(btn, "Click Storage");
    sleep(random(5000, 6000));
  }
}

//android.widget.Button[@text="Check NEWS"]
btn = className("android.widget.Button").text("Check NEWS").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Check NEWS");
  sleep(random(1500, 2000));
  back();
}

//android.widget.Button[@text="Claim HOT"]
btn = className("android.widget.Button").text("Claim HOT").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Claim HOT");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();

//android.widget.TextView[@text="Close anyway"]
btn = className("android.widget.TextView").text("Close anyway").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Close anyway");
  sleep(random(1500, 2000));
}