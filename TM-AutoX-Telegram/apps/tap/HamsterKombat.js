var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/hamster_kombat_bot?start=kentId5629897737"
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
var element = className("android.widget.TextView").text("Start").findOne(3000);
if (element) {
  sleep(random(1000, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6900, 8000));

//android.widget.Button[@text="Cảm ơn bạn, Binance"]
element = className("android.widget.Button").textContains("Cảm ơn bạn").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
}

//android.widget.Button[@text="Thank you, Binance"]
element = className("android.widget.Button").textContains("Thank you").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Claim");
}

sleep(random(1500, 2000));

//android.widget.Button[@text="Hamster Kombat"]
element = className("android.widget.Button").text("Hamster Kombat").findOne(3000);
if (element) {
  sleep(random(1500, 2000));
  threads.start(() => {
    while (true) {
      utils.onElementMultipleGesture(element, 5, { min: 10, max: 30 }, -20);//, "Click Multiple Icon");
    }
  })
  sleep(random(50000, 60000));
  threads.shutDownAll();
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();