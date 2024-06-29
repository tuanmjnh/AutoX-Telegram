var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/BBQcoin_bot/BBQcoin?startapp=rp_9000019_5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.Button[@text="Thanks"]
element = className("android.widget.Button").text("Thanks").findOne(5000);
if (element) {
  sleep(random(2500, 3900));
  utils.onElementClick(element, "Click Thanks");
  sleep(random(1500, 2000));
}

//device.width/2, device.height / 2.5
sleep(random(1500, 2000));
var delay = { min: 5, max: 20 };
var bounds = { x: device.width / 2, y: device.height / 2.5, w: 200, h: 200 };
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
sleep(random(35000, 45000));
threads.shutDownAll();

sleep(random(2000, 3000));
back();
//android.widget.TextView[@text="Close anyway"]
element = className("android.widget.TextView").text("Close anyway").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Close anyway");
  sleep(random(1500, 2000));
}