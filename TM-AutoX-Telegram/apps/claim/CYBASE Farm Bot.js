var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/CyberbaseFarm_bot?start=5629897737"
//Screenshot request
if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(6900, 9000));

//android.view.View[@content-desc="Bot menu"]
var btn = className("android.view.View").desc("Bot menu").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Open app");
  sleep(random(5000, 6000));
}

//android.widget.TextView[@text="Start"]
btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Open app");
  sleep(random(5000, 6000));
}

sleep(5000)
swipe(260, 830, 260, 500, 600)
sleep(2000)
swipe(260, 630, 260, 285, 600)
sleep(2000)
swipe(260, 350, 260, 285, 600)
sleep(3000)

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