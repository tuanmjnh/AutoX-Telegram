// auto();

// Ensure the accessibility service is enabled
// if (!auto.service) {
//   toast("Please enable accessibility service for Auto.js");
//   exit();
// }

// var btnCloseNest = className("android.view.View").find();
// if (btnCloseNest && btnCloseNest.length) {
//   console.log(btnCloseNest[7])
//   click(370,25)
// }
sleep(1000);
function findNthInstance(className, instanceIndex) {
  var views = className(className).find();
  if (views.size() > instanceIndex) {
    return views.get(instanceIndex);
  } else {
    return null;
  }
}

// Class name of the target view
var targetClassName = "android.view.View";
// Instance index (0-based)
var instanceIndex = 7;

// Find the target view
// var targetView = findNthInstance(targetClassName, instanceIndex);

// if (targetView) {
//   // Perform actions on the target view (e.g., click)
//   targetView.click();
//   toast("Target view clicked!");
// } else {
//   toast("Target view not found!");
// }

//android.webkit.WebView[@text="ToON Nation"]/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.widget.Image

var view = className("android.webkit.WebView").text("ToON Nation").findOne(3000);
var a = view.child(0).child(2).child(0).child(0).child(0)
a.click();
var bounds = a.bounds()
console.log({ x: bounds.left, y: bounds.top, w: bounds.width(), h: bounds.height() })