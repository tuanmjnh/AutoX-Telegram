var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/gEmzcoin_bot/tap?startapp=690TaD-UFv1nCFOiCJZPFid"
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

//android.widget.TextView[@text="claim"]
element = className("android.widget.TextView").text("claim").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
  sleep(random(1500, 2000));
}

//android.widget.Image[@text="button_x.68feca04fc94eaf23537eb7b062829ff"]
element = className("android.widget.Image").textContains("button_x").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click X");
  sleep(random(1500, 2000));
}

//android.view.View[@resource-id="coin-container"]
// element = id("coin").findOne(5000);
// console.log(element)
// if (element) {
//     sleep(random(1500, 2000));
//     threads.start(() => {
//       while (true) {
//         utils.onElementMultipleGesture(elements[0], 3, { min: 60, max: 90 }, "Click Multiple Icon");
//       }
//     })
//     sleep(random(26000, 30000));
//     threads.shutDownAll();
// }

//[175,757][905,1484]
//device.width/2, device.height / 2.5
sleep(random(1500, 2000));
var delay = { min: 10, max: 30 };
var bounds = { x: device.width / 2, y: device.height / 2.5, w: 200, h: 200 };
var total = 5
threads.start(() => {
  while (true) {
    for (let i = 0; i < total; i++) {
      p = utils.getRandomBoundsWH(bounds, -15);
      gesture(random(delay.min, delay.max), p, p);
      sleep(random(delay.min * 3, delay.max * 3));
    }
  }
})
sleep(random(26000, 30000));
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