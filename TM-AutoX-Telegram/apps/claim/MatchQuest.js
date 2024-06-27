var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/MatchQuestBot/start?startapp=fdfc42ee215c1aedc71e7be12051dc0f"
//Screenshot request
if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(6000, 8000));

//android.view.View[@text="Claim"]
var btn = className("android.view.View").text("Claim").findOne(3000);
if (btn) {
  sleep(random(600, 1000));
  utils.onButtonClick(btn, "Click Claim");
  sleep(random(3000, 6000));
}

//android.view.View[@text="Start Farming"]
btn = className("android.view.View").text("Start Farming").findOne(3000);
if (btn) {
  sleep(random(600, 1000));
  utils.onButtonClick(btn, "Click Start Farming");
  sleep(random(3000, 6000));
}

//android.widget.TextView[@text="Friends"]
btn = className("android.widget.TextView").text("Friends").findOne(5000);
if (btn) {
  sleep(random(600, 1000));
  utils.onButtonClick(btn, "Click Friends");
  sleep(random(3000, 6000));
}

//android.view.View[@text="Claim"]
btn = className("android.view.View").text("Claim").findOne(5000);
if (btn) {
  sleep(random(600, 1000));
  utils.onButtonClick(btn, "Click Claim");
  sleep(random(3000, 6000));
}
sleep(random(1500, 3000));
back();