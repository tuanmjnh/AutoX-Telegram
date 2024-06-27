var utils = require(files.path(`./utils.js`));
// The link you want to open in Telegram
var bot = "https://t.me/seed_coin_bot/app?startapp=5629897737";
//Screenshot request
if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(4000, 6000));

//android.widget.Button[@text="CHECK NEWS"]
//className("android.widget.Button").text("CHECK NEWS").findOne();
var btn = className("android.widget.Button").text("CHECK NEWS").findOne(3000);
if (btn) {
  sleep(random(1000, 2000));
  var cbtn = utils.onButtonClick(btn, "Click check news");
  sleep(random(1000, 2000));
  if (cbtn) back();
}

btn = text("Claim").findOne(3000);
sleep(random(1000, 2000));
utils.onButtonClick(btn, "Claim");
sleep(random(8000, 10000));
back();
