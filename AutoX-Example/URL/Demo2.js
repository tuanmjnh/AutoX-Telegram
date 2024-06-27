// Replace the URL with the link you want to open
var url = "https://t.me/pixie_project_bot?start=5629897737";

// Function to open the URL using a specific app
function openUrlWithApp(packageName, url) {
  // Use the intent to open the URL
  var intent = new Intent(Intent.ACTION_VIEW, android.net.Uri.parse(url));

  // Set the package of the specific app you want to open the URL with
  intent.setPackage(packageName); // Replace with the package name of the app

  // Check if the app is installed
  var pm = context.getPackageManager();
  var activities = pm.queryIntentActivities(intent, 0);
  var isIntentSafe = activities.size() > 0;

  if (isIntentSafe) {
    // Start the activity
    app.startActivity(intent);
    toast("Opening URL with the specified app.");
  } else {
    toast("The specified app is not installed.");
  }
};

// Call the function to open the URL with the specified app
openUrlWithApp("org.telegram.messenger", url);
