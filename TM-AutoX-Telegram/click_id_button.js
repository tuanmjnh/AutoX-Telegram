// Import necessary classes
// const { app } = require("auto");
// const { click, findOne } = require("uiautomator");

// The link you want to open in Telegram
var link = "https://t.me/seed_coin_bot/app?startapp=5629897737"; // Replace with your actual Telegram link

// Launch Telegram app
launchApp("Telegram");

// Wait for Telegram to load
sleep(5000); // Adjust the sleep time as needed
try {
  // Find the search button and click on it
  //android.widget.ImageButton[@content-desc="Search"]
  //elementId: 00000000-0000-000d-ffff-ffff00000021
  var btnSearch = className("android.widget.ImageButton").desc("Search").findOne();
  console.log("btnSearch: " + btnSearch);
  sleep(1000);

  //android.widget.ImageView[@content-desc="Open navigation menu"]
  //elementId: 00000000-0000-000d-ffff-ffff00000015
  var btnMenu = className("android.widget.ImageView").desc("Open navigation menu").findOne();
  console.log("btnMenu: " + btnMenu);
  // Wait for the search field to appear
  sleep(1000); // Adjust the sleep time as needed
  btnMenu.click();

  // Find the search input field and type the link
  var searchInput = className("android.widget.EditText").findOne();
  // searchInput.setText(link);

  // var btnCloseNest = className("android.view.View").find();
  // if (btnCloseNest && btnCloseNest.length) console.log(btnCloseNest[7])

  // Wait for search results to appear
  sleep(2000); // Adjust the sleep time as needed

  // Click on the first search result (assuming it matches the link)
  var firstResult = className("android.widget.TextView").textContains(link).findOne();
  firstResult.click();

} catch (error) {
  console.log(error);
}
