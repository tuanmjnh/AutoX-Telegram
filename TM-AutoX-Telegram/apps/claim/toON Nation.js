var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/toon_nation_bot/toon_nation?startapp=5629897737"
//Screenshot request
// if (!requestScreenCapture()) toast("Screenshot request failed");
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(2900, 3900));

//android.view.View[@content-desc="Bot menu"]
var element = className("android.view.View").desc("Bot menu").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Open app");
}

//android.widget.TextView[@text="Start"]
element = className("android.widget.TextView").text("Start").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Start");
}

sleep(random(6000, 8000));

//android.widget.Button[@text="Collect Coins"]
element = className("android.widget.Button").textContains("Collect Coins").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Collect Coins");
  sleep(random(2500, 3900));
}

//android.widget.Button[@text="Upgrade"]
element = className("android.widget.Button").text("Upgrade").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Upgrade");
  sleep(random(2000, 3000));
}

var eleCloseBounds = null;
//android.widget.Button[@text="lvl 39 Increase Farming Speed Now 4.8K icon / sec Upgrade for 212M"]
element = className("android.widget.Button").textContains("Increase Farming Speed").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Increase Farming Speed");
  sleep(random(1500, 2000));

  //android.widget.Button[@text="icon 212 560 973 coins"]
  element = className("android.widget.Button").textContains("coins").findOne(5000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Upgrade coins");
    sleep(random(2000, 3000));
  }

  //new UiSelector().className("android.view.View").instance(9)
  //android.webkit.WebView[@text="ToON Nation"]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]

  //new UiSelector().className("android.widget.Image").instance(4)
  //android.webkit.WebView[@text="ToON Nation"]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.widget.Image
  // element = className("android.webkit.WebView").text("ToON Nation").findOne(5000);
  // if (element) {
  //   sleep(random(1500, 2000));
  //   utils.onElementClick(element.child(0).child(2).child(0).child(0).child(0), "Click Close");
  //   sleep(random(1500, 2000));
  // }

  // Get bounds Close
  var elements = className("android.widget.Image").find();
  if (elements && elements.length > 24) eleCloseBounds = elements[24].bounds();
  // Close
  sleep(random(1500, 2000));
  utils.onBoundsClick(eleCloseBounds);
  sleep(random(1500, 2000));
}

//android.widget.Button[@text="lvl 34 Increase Wallet Limit Now 17M icon Upgrade for 88.8M"]
element = className("android.widget.Button").textContains("Increase Wallet Limit").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Increase Wallet Limit");
  sleep(random(1500, 2000));

  //android.widget.Button[@text="icon 212 560 973 coins"]
  element = className("android.widget.Button").textContains("coins").findOne(5000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Upgrade coins");
    sleep(random(2000, 3000));
  }

  // Close
  sleep(random(1500, 2000));
  utils.onBoundsClick(eleCloseBounds);
  sleep(random(1500, 2000));
}

//android.widget.Button[@text="lvl 27 Increase Vault Capacity Now 100 000M icon Upgrade for 100 000M"]
element = className("android.widget.Button").textContains("Increase Vault Capacity").findOne(5000);
if (element) {
  sleep(random(1500, 2000));
  utils.onElementClick(element, "Click Increase Vault Capacity");
  sleep(random(1500, 2000));

  //android.widget.Button[@text="icon 212 560 973 coins"]
  element = className("android.widget.Button").textContains("coins").findOne(5000);
  if (element) {
    sleep(random(1500, 2000));
    utils.onElementClick(element, "Click Upgrade coins");
    sleep(random(2000, 3000));
  }

  // Close
  sleep(random(1500, 2000));
  utils.onBoundsClick(eleCloseBounds);
  sleep(random(1500, 2000));
}

sleep(random(2000, 3000));
back();
sleep(random(1000, 2000));
back();