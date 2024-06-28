var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/CyberbaseFarm_bot?start=5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2900, 3900));

//android.view.View[@content-desc="Bot menu"]
var btn = className("android.view.View").desc("Bot menu").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Open app");
}

//android.widget.TextView[@text="Start"]
btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Start");
}

sleep(random(6900, 9000));

for (let i = 0; i < 3; i++) {
  //swipe(startX, startY, endX, endY, duration);
  var x = random(220, 280)
  swipe(x, random(device.height / 1.2, device.height / 1.5), x, random(device.height / 2, device.height / 2.2), random(200, 600))
  sleep(random(1500, 2500))
}

//android.widget.Button[@text="Claim logo 90.00000"]
btn = className("android.widget.Button").textContains("Claim").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click CLAIM");
  sleep(random(5000, 6000));
  utils.onButtonClick(btn, "Click CLAIM");
  sleep(random(5000, 6000));
  utils.onButtonClick(btn, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();
sleep(random(1000, 2000));
back();