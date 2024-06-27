// Import necessary classes
// const { app } = require("auto");
// const { click, findOne } = require("uiautomator");

// The link you want to open in Telegram
var link = "https://t.me/pixie_project_bot?start=5629897737"; // Replace with your actual Telegram link

// Launch Telegram app
launchApp("Telegram");

// Wait for Telegram to load
sleep(5000); // Adjust the sleep time as needed
try {
  // Find the search button and click on it
  var searchButton = className("android.widget.ImageView").desc("Search").findOne();
  console.log(searchButton);
  searchButton.click();

  // Wait for the search field to appear
  sleep(1000); // Adjust the sleep time as needed

  // Find the search input field and type the link
  var searchInput = className("android.widget.EditText").findOne();
  searchInput.setText(link);

  // Wait for search results to appear
  sleep(2000); // Adjust the sleep time as needed

  // Click on the first search result (assuming it matches the link)
  var firstResult = className("android.widget.TextView").textContains(link).findOne();
  firstResult.click();

} catch (error) {
  console.log(error);
}
