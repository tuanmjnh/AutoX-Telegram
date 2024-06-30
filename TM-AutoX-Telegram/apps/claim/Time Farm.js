var utils = require(files.path(`./utils.js`));
// The link you want to open in Telegram
var bot = "https://t.me/TimeFarmCryptoBot?start=N8PYn7clcBqDxVzh";
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
auto.waitFor();
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(4000, 6000));

//android.widget.Button[@text="Mở chương trình"])[2]
var elements = className("android.widget.Button").find();
if (elements && elements.length) {
  sleep(random(1000, 2000));
  utils.onElementClick(elements[elements.length - 2], "Click open app");
}
//android.widget.TextView[@text="Start"]
var element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6000, 8000));

//android.widget.TextView[@text="Claim"]
element = className("android.widget.TextView").text("Claim").findOne(3000);
if (element) {
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Claim");
  sleep(random(2000, 2900));
  utils.onElementClick(element, "Claim");
  sleep(random(1500, 2000));
}

sleep(random(2000, 3000));
back();
sleep(random(2000, 3000));
back();