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
var btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Start");
}

sleep(random(8000, 10000));

//android.widget.Button[@text="Claim FREE"]
btn = className("android.widget.Button").text("Claim FREE").findOne(3000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Claim FREE");
  sleep(random(3000, 6000));
}

//android.view.View[@content-desc="Claim"]
btn = className("android.view.View").desc("Claim").findOne(3000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Claim mining");
  sleep(random(3000, 6000));
}

//android.widget.Button[@text="Claim"]
btn = className("android.widget.Button").text("Claim").findOne(3000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Claim");
  sleep(random(3000, 6000));
}

//android.widget.Button[@text="Upgrade"]
btn = className("android.widget.Button").text("Upgrade").findOne(3000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Upgrade");
  sleep(random(3000, 6000));
}

//android.widget.Button[@text="Confirm"]
btn = className("android.widget.Button").text("Confirm").findOne(3000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Confirm");
  sleep(random(3000, 6000));
}

//android.widget.Button[@text="gf6NkiL5a0dfAAAAABJRU5ErkJggg=="]
btn = className("android.widget.Button").text("gf6NkiL5a0dfAAAAABJRU5ErkJggg==").findOne(3000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Close");
  sleep(random(3000, 6000));
}

//android.widget.ImageView[@content-desc="Go back"]
btn = className("android.widget.ImageView").desc("Go back").findOne(3000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Go Back");
  sleep(random(3000, 6000));
}

//android.widget.TextView[@text="Mission"]
btn = className("android.widget.TextView").text("Mission").findOne(3000);
if (btn) {
  sleep(random(2000, 2900));
  utils.onButtonClick(btn, "Click Mission");
  sleep(random(3000, 6000));
}

//
sleep(5000)
swipe(260, 830, 260, 500, 600)
sleep(2000)
swipe(260, 630, 260, 285, 600)
sleep(2000)
swipe(260, 350, 260, 285, 600)
sleep(3000)

//Task daily
//android.widget.Button[@text="oHrcblyQNSeooAAAAASUVORK5CYII="])[2]
var btns = className("android.widget.Button").text("oHrcblyQNSeooAAAAASUVORK5CYII=").find();
sleep(random(600, 1000));
if (btns && btns.length > 5) {
  for (let i = 2; i < 5; i++) {
    sleep(random(3000, 6000));
    utils.onButtonClick(btns[i], `Click task daily ${i}`);
  }
}

//android.widget.ImageView[@content-desc="Go back"]
btn = className("android.widget.ImageView").desc("Go back").findOne(3000);
if (btn) {
  sleep(random(600, 1000));
  utils.onButtonClick(btn, "Click Go Back");
  sleep(random(3000, 6000));
}

//android.widget.ImageView[@content-desc="Go back"]
btn = className("android.widget.ImageView").desc("Go back").findOne(3000);
if (btn) {
  sleep(random(600, 1000));
  utils.onButtonClick(btn, "Click Go Back");
  sleep(random(3000, 6000));
}