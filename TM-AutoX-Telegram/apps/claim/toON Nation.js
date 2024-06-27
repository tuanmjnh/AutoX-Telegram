var utils = require(files.path(`./utils.js`))
var bot = "https://t.me/toon_nation_bot/toon_nation?startapp=5629897737"
//waitFor
auto.waitFor();
//open Telegram bot by link
utils.openUrlWithAppName("Telegram", bot, "Open bot link");
sleep(random(6900, 9000));

//android.view.View[@content-desc="Bot menu"]
var btn = className("android.view.View").desc("Bot menu").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Open app");
  sleep(random(5000, 6000));
}

//android.widget.TextView[@text="Start"]
btn = className("android.widget.TextView").text("Start").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Start");
  sleep(random(5000, 6000));
}

//android.widget.Button[@text="icon Collect Coins"]
btn = className("android.widget.Button").text("icon Collect Coins").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Collect Coins");
  sleep(random(5000, 6000));
}

//android.widget.Button[@text="Upgrade"]
btn = className("android.widget.Button").text("Upgrade").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Upgrade");
  sleep(random(5000, 6000));
}

function findNthInstance(className, instanceIndex) {
  var views = className(className).find();
  if (views.size() > instanceIndex) {
    return views.get(instanceIndex);
  } else {
    return null;
  }
}


//android.widget.Button[@text="lvl 39 Increase Farming Speed Now 4.8K icon / sec Upgrade for 212M"]
btn = className("android.widget.Button").textContains("Increase Farming Speed").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Increase Farming Speed");
  sleep(random(5000, 6000));

  //android.widget.Button[@text="icon 212 560 973 coins"]
  btn = className("android.widget.Button").textContains("coins").findOne(5000);
  if (btn) {
    sleep(random(1500, 2000));
    utils.onButtonClick(btn, "Click Upgrade coins");
    sleep(random(5000, 6000));
  }
  //android.webkit.WebView[@text="ToON Nation"]/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]
  btn = className("android.webkit.WebView").text("ToON Nation").findOne(5000);
  if (btn) {
    sleep(random(1500, 2000));
    utils.onButtonClick(btn.child(0).child(2).child(0).child(0).child(0), "Click Close");
    sleep(random(5000, 6000));
  }
}

//android.widget.Button[@text="lvl 34 Increase Wallet Limit Now 17M icon Upgrade for 88.8M"]
btn = className("android.widget.Button").textContains("Increase Wallet Limit").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Increase Wallet Limit");
  sleep(random(5000, 6000));

  //android.widget.Button[@text="icon 212 560 973 coins"]
  btn = className("android.widget.Button").textContains("coins").findOne(5000);
  if (btn) {
    sleep(random(1500, 2000));
    utils.onButtonClick(btn, "Click Upgrade coins");
    sleep(random(5000, 6000));
  }
  //android.webkit.WebView[@text="ToON Nation"]/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]
  btn = className("android.webkit.WebView").text("ToON Nation").findOne(5000);
  if (btn) {
    sleep(random(1500, 2000));
    utils.onButtonClick(btn, "Click Close");
    sleep(random(5000, 6000));
  }
}

//android.widget.Button[@text="lvl 27 Increase Vault Capacity Now 100 000M icon Upgrade for 100 000M"]
btn = className("android.widget.Button").textContains("Increase Vault Capacity").findOne(5000);
if (btn) {
  sleep(random(1500, 2000));
  utils.onButtonClick(btn, "Click Increase Vault Capacity");
  sleep(random(5000, 6000));

  //android.widget.Button[@text="icon 212 560 973 coins"]
  btn = className("android.widget.Button").textContains("coins").findOne(5000);
  if (btn) {
    sleep(random(1500, 2000));
    utils.onButtonClick(btn, "Click Upgrade coins");
    sleep(random(5000, 6000));
  }
  //android.webkit.WebView[@text="ToON Nation"]/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]
  btn = className("android.webkit.WebView").text("ToON Nation").findOne(5000);
  if (btn) {
    sleep(random(1500, 2000));
    utils.onButtonClick(btn, "Click Close");
    sleep(random(5000, 6000));
  }
}

sleep(random(2000, 3000));
back();
sleep(random(1000, 2000));
back();