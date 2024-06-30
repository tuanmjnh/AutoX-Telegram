var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/UTXORDbot/WhoIsBithoven?startapp=4456d969-5d91-4047-8947-8396061583fb"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2000, 2900));

//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Start");
}

sleep(random(5000, 6000));

//android.widget.Button[@text="Collect"]
element = className("android.widget.Button").text("Collect").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click CLAIM");
  sleep(random(5000, 6000));
}

sleep(random(2000, 3000));
back();