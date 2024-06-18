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
  rd50: () => { return random(-50, 50) },
  rd100: () => { return random(-100, 100) },
  rd150: () => { return random(-150, 150) },
  rd200: () => { return random(-200, 200) },
  rd300: () => { return random(-300, 300) },
  rd500: () => { return random(-500, 500) },
  rd05: () => { return random(0, 5) },
  rd010: () => { return random(0, 10) },
  rd015: () => { return random(0, 15) },
  rd020: () => { return random(0, 20) },
  rd030: () => { return random(0, 30) },
  rd050: () => { return random(0, 50) },
  rd0100: () => { return random(0, 100) },
  rd0150: () => { return random(0, 150) },
  rd0200: () => { return random(0, 200) },
  rd0300: () => { return random(0, 300) },
  rd0500: () => { return random(0, 500) }
}

utils.mobiles = [
  { name: 'unknown', with: 1080, height: 1920 },
  { name: 'unknown', with: 900, height: 1600 },
  { name: 'unknown', with: 720, height: 1280 },
  { name: 'unknown', with: 540, height: 960 },
  { name: 'Samsung Galaxy A51', with: 1080, height: 2400 }
]

utils.removeExtension = (val) => {
  return val.replace(/\.[^/.]+$/, "")
}

// Function to kill an app
utils.killPackageNameApp = (packageName) => {
  let result = shell("am force-stop " + packageName, true)
  if (result.code === 0) {
    console.log("Successfully killed the app: " + packageName)
  } else {
    console.log("Failed to kill the app: " + packageName)
  }
}

utils.killApp = (appName) => {
  var packageName = getPackageName("Telegram")
  utils.killPackageNameApp(packageName)
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
  if (log) console.log(log)
  var p = {
    x: random(x1, x2),
    y: random(y1, y2)
  }
  click(p.x, p.y)
}

utils.onClickAreaWH = ({ x, y, w, h, log }) => {
  if (log) console.log(log)
  var p = {
    x: random(x, x + w),
    y: random(y, y + h)
  }
  click(p.x, p.y)
}

utils.onFindImageAndClick = ({ image, icon, width, height, loop, isPass, isClick, log }) => {
  // return new Promise((resolve, reject) => {
  if (log) console.log(log)
  var iconFind = images.read(icon)
  // image = image ? image : captureScreen()
  var p = null, l = 0
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
  if (isClick && p) {
    var point = { x: p.x + (width ? width : utils.rd.rd05()), y: p.y + (height ? height : utils.rd.rd05()) }
    click(point.x, point.y)
    // resolve(point)
  }
  // resolve(null)
  return p
  // })
}

utils.onFindColorClick = ({ image, color, point, threads, loop, isPass, clickAddX, clickAddY, log }) => {
  return new Promise((resolve, reject) => {
    if (log) console.log(log)
    // if (!image) image = captureScreen()
    if (!threads) threads = 1
    var p = null, l = 0
    sleep(500)
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
    if (p && clickAddX && clickAddY) utils.onClickArea({ x1: p.x, y1: p.y, x2: clickAddX, y2: clickAddY })
    resolve(p)
  })
}

utils.onFindColorWH = ({ x, y, w, h, log }) => {
  if (log) console.log(log)
  var p = {
    x: random(x, x + w),
    y: random(y, y + h)
  }
  click(p.x, p.y)
}

utils.onTypeText = (text, log) => {
  if (log) console.log(log)
  text = text.split(' ')
  for (var i = 0; i < text.length; i++) {
    Text(text[i])
    if (i < text.length - 1) KeyCode(62) //Key code Space
  }
}

utils.isDestroyedEngine = (engine, delay) => {
  var isDestroyed = false
  do {
    sleep(delay)
    isDestroyed = engine.getEngine().isDestroyed()
  } while (!isDestroyed)
  sleep(500)
  return isDestroyed
}

module.exports = utils