var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/memefi_coin_bot?start=r_6a9e582a17"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.view.View[@content-desc="Bot menu"]
var element = className("android.view.View").desc("Bot menu").findOne(5000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Open app");
}

//android.widget.TextView[@text="Start"]
element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6900, 8000));

//device.width/2, device.height / 2.5
sleep(random(600, 1000));
var delay = { min: 15, max: 36 };
var bounds = { x: device.width / 2.8, y: device.height / 2.8, w: 399, h: 500 };
var total = 3
threads.start(() => {
  while (true) {
    for (let i = 0; i < total; i++) {
      p = utils.getRandomBoundsWH(bounds);
      gesture(random(delay.min, delay.max), p, p);
      sleep(random(delay.min * 3, delay.max * 3));
    }
  }
})
sleep(random(69000, 83000));
threads.shutDownAll();

//android.widget.Button[@text="ListLeft New ListLeft Boosters"]
element = className("android.widget.Button").textContains("Boosters").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Boosters");
}

//android.widget.TextView[@text="TAP BOT"]
// element = className("android.widget.TextView").text("TAP BOT").findOne(3000);
// if (element) {
//   sleep(random(1000, 2000));
//   utils.onElementClick(element, "Click TAP BOT");
// }
// sleep(random(2000, 3000));
// back();

//android.widget.Button[@text="Turbo 3 / 3 Boosts"]
element = className("android.widget.TextView").text("Turbo 0 / 3 Boosts").findOne(3000);
if (!element) {
  element = className("android.widget.TextView").textContains("Turbo").findOne(3000);
  if (element) {
    sleep(random(1000, 2000));
    utils.onElementClick(element, "Click Turbo");
  }

  //android.widget.Button[@text="Claim Boost"]
  element = className("android.widget.Button").text("Claim Boost").findOne(3000);
  if (element) {
    sleep(random(1000, 2000));
    utils.onElementClick(element, "Click Claim Boost");
  }
}

//android.widget.Button[@text="Recharge 3 / 3 Boosts"]
element = className("android.widget.TextView").text("Recharge 0 / 3 Boosts").findOne(3000);
if (!element) {
  element = className("android.widget.TextView").textContains("Recharge").findOne(3000);
  if (element) {
    sleep(random(1000, 2000));
    utils.onElementClick(element, "Click Recharge");
  }

  //android.widget.Button[@text="Claim Boost"]
  element = className("android.widget.Button").text("Claim Boost").findOne(3000);
  if (element) {
    sleep(random(1000, 2000));
    utils.onElementClick(element, "Click Claim Boost");
  }
}

sleep(random(2000, 3000));
back();

//device.width/2, device.height / 2.5
sleep(random(600, 1000));
var delay = { min: 15, max: 36 };
var bounds = { x: device.width / 2, y: device.height / 2.2, w: 399, h: 500 };
var total = 3
threads.start(() => {
  while (true) {
    for (let i = 0; i < total; i++) {
      p = utils.getRandomBoundsWH(bounds);
      gesture(random(delay.min, delay.max), p, p);
      sleep(random(delay.min * 3, delay.max * 3));
    }
  }
})
sleep(random(69000, 83000));
threads.shutDownAll();

sleep(random(1500, 3000));
back();
sleep(random(1500, 3000));
back();