var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/wormfare_slap_bot?start=r_5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.Button[@text="🤚 Let's Slap"]
var element = className("android.widget.Button").textContains("Let's Slap").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Open app");
} else {
  sleep(random(1000, 2000));
  //android.view.View[@content-desc="Bot menu"]
  var element = className("android.view.View").desc("Bot menu").findOne(3000);
  if (element) {
    sleep(random(1000, 2000));
    utils.onElementClick(element, "Click Open app");
  }
}

//android.widget.TextView[@text="Start"]
element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.Button[@text="rhombus Claim"]
element = className("android.widget.Button").text("rhombus Claim").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(5000, 6000));
}

//device.width/2.5, device.height / 1.9
sleep(random(600, 1000));
var delay = { min: 15, max: 36 };
var bounds = { x: device.width / 2.5, y: device.height / 1.9, w: 300, h: 300 };
var total = 5
threads.start(() => {
  while (true) {
    for (let i = 0; i < total; i++) {
      p = utils.getRandomBounds(bounds);
      gesture(random(delay.min, delay.max), p, p);
      sleep(random(delay.min * 3, delay.max * 3));
    }
  }
})
sleep(random(40000, 60000));
threads.shutDownAll();

sleep(random(2000, 3000));
back();