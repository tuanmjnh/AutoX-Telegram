var utils = require(files.path(`./utils.js`));
// The link you want to open in Telegram
var bot = "https://t.me/TimeFarmCryptoBot?start=N8PYn7clcBqDxVzh";
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
auto.waitFor();
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(4000, 6000));

//android.widget.Button[@text="Mở chương trình"])[2]
var btns = className("android.widget.Button").find();
var btn = null;
var cbtn = null;
if (btns.length > 0 && btns[2]) {
  sleep(random(1000, 2000));
  cbtn = utils.onButtonClick(btns[2], "Click open app");
  sleep(random(4000, 6000));
  //android.widget.TextView[@text="Claim"]
  btn = className("android.widget.TextView").text("Claim").findOne(3000);
  if (btn) {
    sleep(random(2000, 2900));
    cbtn = utils.onButtonClick(btn, "Claim");
  }
  //android.view.View[@text="Start"]
  btn = className("android.view.View").text("Start").findOne(3000);
  if (btn) {
    sleep(random(2000, 2900));
    cbtn = utils.onButtonClick(btn, "Start");
  }
  sleep(random(8000, 10000));
  back();
  sleep(random(1000, 2000));
  back();
} else {
  sleep(random(1000, 2000));
  back();
}