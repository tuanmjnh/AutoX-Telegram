let utils = {}
utils.appPath = 'TM-AutoX-Telegram'
utils.sdcard = files.getSdcardPath()
utils.root = files.join(utils.sdcard, '脚本')
utils.rootApp = files.join(utils.root, utils.appPath)
utils.rootApps = files.join(utils.rootApp, 'apps')
utils.rootAppsClaim = files.join(utils.rootApps, 'claim')
utils.rootAppsTap = files.join(utils.rootApps, 'tap')
utils.picturesPath = files.join(utils.sdcard, "Pictures")
utils.screenshotsPath = files.join(utils.picturesPath, "Screenshots")
utils.iconPath = files.join(utils.picturesPath, "icons")

// if (!requestScreenCapture()) {
//   toast("Screenshot request failed")
//   // exit()
// }

// Request root access (if needed)
// if (!shell("su", true).code) {
//   console.log("Root access granted");
// } else {
//   console.log("No root access");
// }

// if (!files.exists(`${iconPath}/`)) 
files.create(`${utils.picturesPath}/`)
files.create(`${utils.screenshotsPath}/`)
files.create(`${utils.iconPath}/`)

utils.rd = {
  rd5: () => { return random(-5, 5) },
  rd10: () => { return random(-10, 10) },
  rd15: () => { return random(-15, 15) },
  rd20: () => { return random(-20, 20) },
  rd30: () => { return random(-30, 30) },
  rd40: () => { return random(-40, 40) },
  rd50: () => { return random(-50, 50) },
  rd100: () => { return random(-100, 100) },
  rd150: () => { return random(-150, 150) },
  rd200: () => { return random(-200, 200) },
  rd300: () => { return random(-300, 300) },
  rd400: () => { return random(-400, 400) },
  rd500: () => { return random(-500, 500) },
  rd05: () => { return random(0, 5) },
  rd010: () => { return random(0, 10) },
  rd015: () => { return random(0, 15) },
  rd020: () => { return random(0, 20) },
  rd030: () => { return random(0, 30) },
  rd040: () => { return random(0, 40) },
  rd050: () => { return random(0, 50) },
  rd0100: () => { return random(0, 100) },
  rd0150: () => { return random(0, 150) },
  rd0200: () => { return random(0, 200) },
  rd0300: () => { return random(0, 300) },
  rd0400: () => { return random(0, 400) },
  rd0500: () => { return random(0, 500) }
}

utils.mobiles = [
  { name: 'unknown', with: 1080, height: 1920 },
  { name: 'unknown', with: 900, height: 1600 },
  { name: 'unknown', with: 720, height: 1280 },
  { name: 'unknown', with: 540, height: 960 },
  { name: 'Samsung Galaxy A51', with: 1080, height: 2400 }
]

// Supports
utils.removeExtension = (val) => {
  return val.replace(/\.[^/.]+$/, "")
}

utils.pushIfNotExist = function (origin, element, key) {
  if (Array.isArray(element)) {
    element.forEach(e => {
      if (key) {
        if (origin.findIndex(x => x[key] === e[key]) < 0) origin.push(e);
      } else {
        if (origin.indexOf(e) < 0) origin.push(e);
      }
    })
  } else {
    if (key) {
      if (origin.findIndex(x => x[key] === element[key]) < 0) origin.push(element);
    } else {
      if (origin.indexOf(element) < 0) origin.push(element);
    }
  }
}

// Function to open the URL using a specific app
utils.openUrlWithAppPackageName = (packageName, url) => {
  try {
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
      // toast("Opening URL with the specified app.");
    } //else {
    //   toast("The specified app is not installed.");
    // }
  } catch (error) {
    toast(error);
  }
};
utils.openUrlWithAppName = (appName, url, log) => {
  if (log) console.log(log);
  var packageName = getPackageName(appName);
  utils.openUrlWithAppPackageName(packageName, url);
}

// Function to kill an app
utils.killPackageNameApp = (packageName) => {
  var result = shell("am force-stop " + packageName, true);
  if (result.code === 0) {
    // console.log("Successfully killed the app: " + packageName)
    return true;
  } else {
    // console.log("Failed to kill the app: " + packageName)
    return false;
  }
}

utils.killPackageNameAppAsync = (packageName) => {
  return new Promise((resolve, reject) => {
    var rs = utils.killPackageNameApp(packageName);
    sleep(200);
    resolve(rs);
  })
}

utils.killApp = (appName) => {
  var packageName = getPackageName(appName);
  utils.killPackageNameApp(packageName);
  return true;
}

utils.killAppAsync = (appName) => {
  return new Promise((resolve, reject) => {
    var packageName = getPackageName(appName);
    utils.killPackageNameAppAsync(packageName).then(x => {
      sleep(200);
      resolve(x);
    })
  })
}
utils.isDestroyedEngine = (engine, delay) => {
  var isDestroyed = false;
  do {
    sleep(delay);
    isDestroyed = engine.getEngine().isDestroyed();
  } while (!isDestroyed)
  sleep(500);
  return isDestroyed;
}

utils.isDestroyedEngineAsync = (engine, delay) => {
  return new Promise((resolve, reject) => {
    var isDestroyed = utils.isDestroyedEngine(engine, delay);
    sleep(200);
    resolve(isDestroyed);
  });
}

utils.getEngine = (engine, delay) => {
  if (delay) sleep(delay);
  const all = engines.all();
  for (let i = 0; i < all.length; i++) {
    var source = all[i].getSource().toString().split('/');
    if (source[source.length - 1] == engine) return all[i];
  }
  return true;
}

utils.getEngineAsync = (engine, delay) => {
  return new Promise((resolve, reject) => {
    var engine = utils.getEngine(engine, delay);
    sleep(100);
    resolve(engine);
  });
}

utils.onCaptureScreenshots = function (imageName, screenshotsPath) {
  // if (!requestScreenCapture()) {
  //   toast("Screenshot request failed")
  //   // exit()
  //   return null
  // }
  var screenshot = captureScreen() // Take a screenshot of the current screen
  // var saveDir = files.join(files.getSdcardPath(), "Pictures", "Screenshots") // Build save directory
  files.create(`${screenshotsPath ? screenshotsPath : screenshotsPath}/`) // Create the save directory (if it does not exist)
  var timestamp = new Date().getTime() // Get the current timestamp
  var savePath = files.join(screenshotsPath ? screenshotsPath : screenshotsPath, imageName ? imageName : "screenshot_" + timestamp + ".png")
  if (screenshot) {
    images.save(screenshot, savePath) // Save the screenshot to the specified path
    // images.recycle()
    console.log("Screenshot save path: ", savePath)
    toast("Screenshot save path: ", savePath)
    // uploadScreenshot(savePath)
    return savePath
  } else {
    alert("An error occurred", "Screen capture failed, please check whether the permission is enabled", function () {
      // global.robotStop()
      return null
    })
  }
}

utils.onClickArea = ({ x1, y1, x2, y2, log }) => {
  if (log) console.log(log);
  var p = { x: random(x1, x2), y: random(y1, y2) };
  // console.log(p);
  click(p.x, p.y);
  return p;
}

utils.onClickAreaAsync = ({ x1, y1, x2, y2, log }) => {
  return new Promise((resolve, reject) => {
    var p = utils.onClickArea({ x1, y1, x2, y2, log });
    sleep(100);
    resolve(p);
  })
}

utils.onClickAreaWH = ({ x, y, w, h, log }) => {
  if (log) console.log(log);
  var fix = 3
  var p = { x: random(x + fix, x + w - fix), y: random(y + fix, y + h - fix) };
  click(p.x, p.y);
  return p;
}

utils.onClickAreaWHAsync = ({ x, y, w, h, log }) => {
  return new Promise((resolve, reject) => {
    var p = utils.onClickAreaWH({ x, y, w, h, log });
    sleep(100);
    resolve(p);
  })
}

utils.onGetBoundsElement = (element, log) => {
  if (log) console.log(log);
  if (!element) return null;
  // Get the bounds of the element
  var bounds = element.bounds();
  // Calculate x, y, width, and height
  // bounds.left, bounds.top, bounds.right, bounds.bottom
  return { x1: bounds.left, y1: bounds.top, x2: bounds.right, y2: bounds.bottom, w: bounds.width(), h: bounds.height() };
}

utils.getRandomBounds = (bounds, fixPercen, isObject) => {
  // var b = { x1: bounds.left, y1: bounds.top, x2: bounds.right, y2: bounds.bottom, w: bounds.width(), h: bounds.height() };
  if (!fixPercen) fixPercen = -0.1
  var FX = bounds.width() * fixPercen / 100
  var FY = bounds.height() * fixPercen / 100
  // console.log("[X] - min: " + (bounds.left - FX), " - max: " + (bounds.right + FX))
  // console.log("[Y] - min: " + (bounds.top - FY), " - max: " + (bounds.bottom + FY))
  var p = { x: random(bounds.left - FX, bounds.right + FX), y: random(bounds.top - FY, bounds.bottom + FY) };
  if (isObject) return p;
  else return [p.x, p.y];
}

utils.getRandomBoundsWH = (bounds, isObject) => {
  var p = { x: random(bounds.x, bounds.x + bounds.w), y: random(bounds.y, bounds.y + bounds.h) };
  if (isObject) return p;
  else return [p.x, p.y];
}

utils.onBoundsClick = (bounds, log) => {
  if (log) console.log(log);
  if (!bounds) return null;
  var p = utils.getRandomBounds(bounds)
  if (!p) return null;
  click(p[0], p[1]);
  return p;
}

utils.onElementClick = (element, log) => {
  if (log) console.log(log);
  if (!element) return null;
  var p = utils.getRandomBounds(element.bounds())
  if (!p) return null;
  click(p[0], p[1]);
  return p;
}

utils.onElementMultipleClick = (element, totalClick, delay, log) => {
  if (log) console.log(log);
  var bounds = utils.onGetBoundsElement(element);
  if (!bounds) return null;
  var p = null;
  if (totalClick == 0) {
    p = utils.onClickArea(bounds);
    sleep(random(delay.min, delay.max));
  } else {
    var total = random(totalClick.min, totalClick.max);
    for (let i = 0; i < total; i++) {
      p = utils.onClickArea(bounds);
      sleep(random(delay.min, delay.max));
    }
  }
  return p;
}

utils.onElementMultipleGesture = (element, totalClick, delay, fixPercen, log) => {
  if (log) console.log(log);
  if (!fixPercen) fixPercen = -0.1
  var bounds = element.bounds();
  if (!bounds) return null;
  var p = null;
  if (totalClick == 0) {
    p = utils.getRandomBounds(bounds, fixPercen);
    gesture(random(delay.min, delay.max), p, p);
    sleep(random(delay.min * 3, delay.max * 3));
  } else if (totalClick.min && totalClick.max) {
    var total = random(totalClick.min, totalClick.max);
    for (let i = 0; i < total; i++) {
      p = utils.getRandomBounds(bounds, fixPercen);
      gesture(random(delay.min, delay.max), p, p);
      sleep(random(delay.min * 3, delay.max * 3));
    }
  } else {
    for (let i = 0; i < totalClick; i++) {
      var p = utils.getRandomBounds(bounds, fixPercen);
      gesture(random(delay.min, delay.max), p, p);
      sleep(random(delay.min * 3, delay.max * 3));
    }
  }
  return p;
}

utils.onFindImageAndClick = ({ image, icon, loop, isPass, range, log }) => {
  if (log) console.log(log);
  var iconFind = images.read(icon);
  // image = image ? image : captureScreen()
  var p = null, l = 0;
  if (loop)
    while (!p) {
      if (l >= loop) if (isPass) break
      p = findImage(image ? image : captureScreen(), iconFind)
      sleep(1000)
      l = l + 1
    }
  else p = findImage(image ? image : captureScreen(), iconFind)
  // recycle
  iconFind.recycle()
  if (image) image.recycle()
  //click
  if (p && range) {
    // var point = { x: p.x + (range.x ? range.x : utils.rd.rd05()), y: p.y + (range.y ? range.y : utils.rd.rd05()) }
    // click(point.x, point.y);
    if (range.x && range.y) utils.onClickArea({ x1: p.x, y1: p.y, x2: range.x, y2: range.y })
    else if (range.w && range.h) utils.onClickAreaWH({ x: p.x, y: p.y, w: range.w, h: range.h })
  }
  return p
}


utils.onFindImageAndClickAsync = ({ image, icon, loop, isPass, range, log }) => {
  return new Promise((resolve, reject) => {
    var p = utils.onFindImageAndClick({ image, icon, loop, isPass, range, log });
    sleep(100);
    resolve(p);
  })
}

utils.onFindColorClick = ({ image, color, point, threads, loop, isPass, range, log }) => {
  if (log) console.log(log);
  // if (!image) image = captureScreen()
  if (!threads) threads = 1;
  var p = null, l = 0;
  sleep(500);
  if (loop)
    while (!p) {
      if (l >= loop) if (isPass) break
      p = findColor(image ? image : captureScreen(), color, {
        region: [point.x1, point.y1, point.x2 - point.x1, point.y2 - point.y1],
        threads: threads
      })
      l = l + 1
      sleep(1000)
    }
  else p = findColor(image ? image : captureScreen(), color, {
    region: [point.x1, point.y1, point.x2 - point.x1, point.y2 - point.y1],
    threads: threads
  })
  if (image) image.recycle()
  sleep(500)
  if (p && range) {
    if (range.x && range.y) utils.onClickArea({ x1: p.x, y1: p.y, x2: range.x, y2: range.y })
    else if (range.w && range.h) utils.onClickAreaWH({ x: p.x, y: p.y, w: range.w, h: range.h })
  }
  return p
}

utils.onFindColorClickAsync = ({ image, color, point, threads, loop, isPass, range, log }) => {
  return new Promise((resolve, reject) => {
    var p = utils.onFindColorClick({ image, color, point, threads, loop, isPass, range, log });
    sleep(100);
    resolve(p);
  })
}

utils.onFindColorWH = ({ x, y, w, h, log }) => {
  if (log) console.log(log);
  var p = { x: random(x, x + w), y: random(y, y + h) };
  click(p.x, p.y)
  return p
}

utils.onFindColorWHAsync = ({ x, y, w, h, log }) => {
  return new Promise((resolve, reject) => {
    var p = utils.onFindColorWH({ x, y, w, h, log });
    sleep(100);
    resolve(p);
  })
}


utils.onTypingText = (text, log) => {
  if (log) console.log(log);
  text = text.split(' ');
  for (var i = 0; i < text.length; i++) {
    Text(text[i]);
    if (i < text.length - 1) KeyCode(62); //Key code Space
  }
  sleep(100);
  return true;
}

utils.onTypingTextAsync = (text, log) => {
  return new Promise((resolve, reject) => {
    utils.onTypingText(text, log);
    sleep(100);
    resolve(true);
  })
}

module.exports = utils