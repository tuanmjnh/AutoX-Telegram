var utils = require(files.path(`./utils.js`));
// The link you want to open in Telegram
var bot = "https://t.me/waveonsuibot/walletapp?startapp=1577918";
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.view.View[@content-desc="Bot menu"]
var btn = className("android.view.View").desc("Bot menu").findOne(3000);
if (btn) {
  sleep(random(1000, 2000));
  utils.onButtonClick(btn, "Click menu");
}

btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Start");
}

sleep(random(5000, 6000));

//new UiSelector().className("android.view.View").instance(12)
//android.view.View[@resource-id="section-home"]/android.view.View[4]/android.view.View[1]/android.view.View[1]/android.view.View
//android.widget.Button[@text="Claim Now"]
btn = text("Claim Now").findOne(5000);
if (btn) {
  sleep(random(1000, 2000));
  utils.onButtonClick(btn, "Click claim");
  sleep(random(3000, 6000));
}

//android.widget.Button[@text="Claim Now"]
btn = text("Claim Now").findOne(5000);
if (btn) {
  sleep(random(1000, 2000));
  utils.onButtonClick(btn, "Click claim");
  sleep(random(5000, 8000));
}

sleep(random(1500, 3000));
back();
sleep(random(1500, 3000));
back();