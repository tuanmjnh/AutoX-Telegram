var utils = require(files.path(`./TM-AutoX-Telegram/utils.js`))
// if (!requestScreenCapture()) toast("Screenshot request failed");
"auto";

// Check if the required permissions are granted
// if (!auto.service) {
//   toast("Please enable accessibility service for Auto.js.");
//   exit();
// }

// console.log(`width: ${device.width} - height: ${device.height}`)
// console.log(device)

//android.widget.Button[@text="Start app"]
// var elements = className("android.widget.Button").textContains("Start app").find();
// console.log(elements.length)
// if (elements && elements.length > 0) {
//   // console.log(elements.text())
//   for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i].text())
//     // console.log(elements[i].bounds().toString() == "Rect(254, 977 - 829, 1563)")
//   }
// }

// var elements = className("android.widget.Button").text("Start App").findOne(3000);
// console.log(elements)
// if (elements && elements.length > 0) {
//   console.log(elements.text())
//   for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i].text())
//     // console.log(elements[i].bounds().toString() == "Rect(254, 977 - 829, 1563)")
//   }
// }

// threads.start(function () {
//   while (true) {
//     // utils.onElementMultipleClick(elements[0], { min: 100, max: 150 }, { min: 50, max: 90 }, "Click Multiple Icon");
//     console.log('thread: ' + 1)
//     sleep(1000)
//   }
// })

// threads.start(function () {
//   while (true) {
//     // utils.onElementMultipleClick(elements[0], { min: 100, max: 150 }, { min: 50, max: 90 }, "Click Multiple Icon");
//     console.log('thread: ' + 2)
//     sleep(2000)
//   }
// })

// threads.start(function () {
//   while (true) {
//     // utils.onElementMultipleClick(elements[0], { min: 100, max: 150 }, { min: 50, max: 90 }, "Click Multiple Icon");
//     console.log('thread: ' + 3)
//     sleep(3000)
//   }
// })


//android.widget.Image[@text="coin"]
//[273,605][811,1132]
// var element = className("android.widget.Image").text("coin").findOne(3000);
// sleep(2000, 3000)
// for (let i = 0; i < 3; i++) {
//   threads.start(function () {
//     while (true) {
//       // utils.onElementMultipleClick(element, 0, { min: 50, max: 90 }, "Click Multiple Icon");
//       // for (let i = 0; i < 3; i++) {
//       //   gesture(random(50, 90), [788, 1372], [788, 1372]);
//       //   // gesture(random(50, 90), [615, 1207], [615, 1207]);
//       //   // gesture(random(50, 90), [532, 1162], [532, 1162]);
//       // }
//       // sleep(random(200, 600))
//       utils.onElementMultipleGesture(element, 3, { min: 60, max: 90 }, "Click Multiple Icon")
//     }
//   })
// }

// sleep(5000)
// //Exit all threads after printing 100 times
// threads.shutDownAll();


setScreenMetrics(device.width, device.height);
console.log(`width: ${device.width} - height: ${device.height}`)

//android.view.View[@resource-id="coin-container"]
//android.view.View[@resource-id="root"]/android.view.View/android.widget.Button
//[183,1014][897,1728]
//android.widget.Image[@text="coin-Yc4kFV6s"]
var elements = className("android.widget.Image").textContains("coin-").find();
console.log(elements.length)
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i].bounds())
}

// element = className("android.widget.TextView").text("0 taps left").findOne(3000);
// if (!element) {
//   //android.view.View[@resource-id="root"]/android.view.View/android.widget.Button[1]
//   // [254,977][829,1563]
//   // Rect(254, 977 - 829, 1563)
//   elements = className("android.widget.Button").find();
//   if (elements && elements.length) {
//     sleep(random(600, 800));
//     threads.start(() => {
//       while (true) {
//         gesture(random(50, 90), [788, 1372], [788, 1372]);
//         gesture(random(50, 90), [615, 1207], [615, 1207]);
//         gesture(random(50, 90), [532, 1162], [532, 1162]);
//       }
//     })
//     sleep(random(10000, 20000));
//     threads.shutDownAll();
//   }
// }
