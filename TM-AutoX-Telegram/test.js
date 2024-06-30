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
// var elements = className("android.widget.Button").textContains("Mining").find();
// console.log(elements.length)
// var element = elements[elements.length - 1]
// var a = element.bounds();
// console.log(a);
// console.log(a.left, a.top, a.right, a.bottom);
// console.log(utils.onGetBoundsElement(element));
// var bounds = utils.onGetBoundsElement(elements[elements.length - 1]);
// console.log(utils.onGetBoundsElement(element));
// console.log(utils.getRandomBounds(element.bounds(), -0.2))
// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i].bounds())
// }

//android.view.View[@resource-id="root"]/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[2]
// [924,584][1042,702]
// var elements = className("android.widget.Button").find();
// utils.onElementClick(elements[1]);

// //android.widget.Button[@text="Day 36 0.01"]
// elements = className("android.widget.Button").textContains("Day ").find();
// for (let i = 0; i < elements.length; i++) {
//   utils.onElementClick(elements[1]);
//   sleep(random(1000, 1500));
//   // console.log(elements[i].bounds())
// }

//android.widget.Button[@text="👉 Play 🎁"]
// var elements = className("android.widget.Button").text("👉 Play 🎁").findOne(5000);
// if (elements && elements.length) {
//   sleep(random(2000, 2900));
//   utils.onElementClick(elements[elements.length - 1], "Click Play");
// }

//android.webkit.WebView[@text="ToON Nation"]/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.widget.Image
//[976,825][1021,870]
//android.widget.Button[@text="Hamster Kombat"]
//[42,1019][1042,1810]
var element = className("android.widget.Button").text("Hamster Kombat").findOne(3000);
// var a = utils.getRandomBounds(element.bounds(),-20)
// console.log(a)
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

// 22: 40: 27.723 / D: Rect(128, 473 - 196, 542)
// 22: 40: 27.733 / D: Rect(2, 305 - 1078, 1382)
// 22: 40: 27.744 / D: Rect(65, 424 - 1015, 1369)
// 22: 40: 27.755 / D: Rect(2, 358 - 1078, 1434)
// 22: 40: 27.762 / D: Rect(976, 2907 - 1021, 2276)
// 22: 40: 27.774 / D: Rect(162, 2959 - 921, 2276)
// 22: 40: 27.785 / D: Rect(947, 2957 - 1082, 2276)
// 22: 40: 27.792 / D: Rect(0, 2957 - 136, 2276)
// 22: 40: 27.805 / D: Rect(65, 3285 - 280, 2276)
// 22: 40: 27.817 / D: Rect(359, 4114 - 425, 2276)
// 22: 40: 27.827 / D: Rect(976, 2970 - 1021, 2276)
// 22: 40: 27.838 / D: Rect(506, 2844 - 574, 2276)
// 22: 40: 27.845 / D: Rect(506, 2907 - 574, 2276)
// 22: 40: 27.857 / D: Rect(506, 2970 - 574, 2276)
// 22: 40: 27.864 / D: Rect(506, 3033 - 574, 2276)
// 22: 40: 27.876 / D: Rect(506, 3096 - 574, 2276)
// 22: 40: 27.886 / D: Rect(506, 3159 - 574, 2276)
// 22: 40: 27.897 / D: Rect(506, 3222 - 574, 2276)
// 22: 40: 27.909 / D: Rect(506, 3285 - 574, 2276)
// 22: 40: 27.922 / D: Rect(63, 2970 - 105, 2276)
// 22: 40: 27.929 / D: Rect(380, 3012 - 700, 2276)
// 22: 40: 27.939 / D: Rect(955, 3623 - 1010, 2276)
// 22: 40: 27.951 / D: Rect(564, 3831 - 609, 2276)
// 22: 40: 27.963 / D: Rect(934, 3938 - 989, 2276)
// 22: 40: 27.970 / D: Rect(976, 825 - 1021, 870)
// 22: 40: 27.981 / D: Rect(105, 962 - 173, 1033)
// 22: 40: 27.992 / D: Rect(210, 1061 - 283, 1135)
// 22: 40: 28.005 / D: Rect(375, 707 - 446, 778)
// 22: 40: 28.012 / D: Rect(527, 1287 - 616, 1376)
// 22: 40: 28.023 / D: Rect(645, 770 - 714, 841)
// 22: 40: 28.034 / D: Rect(803, 691 - 882, 770)
// 22: 40: 28.040 / D: Rect(863, 851 - 931, 920)
// 22: 40: 28.054 / D: Rect(1013, 938 - 1082, 1030)
// 22: 40: 28.066 / D: Rect(63, 825 - 105, 870)
// 22: 40: 28.076 / D: Rect(380, 867 - 700, 1185)
// 22: 40: 28.087 / D: Rect(845, 1476 - 900, 1534)
// 22: 40: 28.094 / D: Rect(564, 1686 - 609, 1731)
// 22: 40: 28.111 / D: Rect(824, 1791 - 879, 1849)
// 22: 40: 28.122 / D: Rect(976, 2865 - 1021, 2276)
// 22: 40: 28.137 / D: Rect(506, 2739 - 574, 2276)
// 22: 40: 28.149 / D: Rect(506, 2802 - 574, 2276)
// 22: 40: 28.162 / D: Rect(506, 2865 - 574, 2276)
// 22: 40: 28.169 / D: Rect(506, 2928 - 574, 2276)
// 22: 40: 28.178 / D: Rect(506, 2991 - 574, 2276)
// 22: 40: 28.192 / D: Rect(506, 3054 - 574, 2276)
// 22: 40: 28.208 / D: Rect(506, 3117 - 574, 2276)
// 22: 40: 28.218 / D: Rect(506, 3180 - 574, 2276)
// 22: 40: 28.227 / D: Rect(63, 2865 - 105, 2276)
// 22: 40: 28.236 / D: Rect(380, 2907 - 700, 2276)
// 22: 40: 28.253 / D: Rect(955, 3518 - 1010, 2276)
// 22: 40: 28.263 / D: Rect(567, 3726 - 611, 2276)
// 22: 40: 28.274 / D: Rect(934, 3833 - 989, 2276)
// 22: 40: 28.283 / D: Rect(934, 3109 - 979, 2276)
// 22: 40: 28.295 / D: Rect(976, 2886 - 1021, 2276)
// 22: 40: 28.311 / D: Rect(170, 2928 - 910, 2276)
// 22: 40: 28.323 / D: Rect(170, 2928 - 910, 2276)
// 22: 40: 28.333 / D: Rect(36, 3188 - 152, 2276)
// 22: 40: 28.343 / D: Rect(136, 3484 - 223, 2276)
// 22: 40: 28.352 / D: Rect(874, 3374 - 963, 2276)
// 22: 40: 28.366 / D: Rect(63, 2846 - 262, 2276)
// 22: 40: 28.376 / D: Rect(792, 2972 - 1076, 2276)

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
