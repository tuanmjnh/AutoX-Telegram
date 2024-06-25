const root = files.cwd()
const rootApp = files.join(root, 'AutoX-Telegram')
const picturesPath = files.join(files.getSdcardPath(), "Pictures")
const screenshotsPath = files.join(picturesPath, "Screenshots")
const iconPath = files.join(picturesPath, "icons")
onCaptureScreenshots = function (name, filePath) {
  if (!requestScreenCapture()) {
    toast("Screenshot request failed")
    // exit()
    return null
  }
  var screenshot = captureScreen() // Take a screenshot of the current screen
  // var saveDir = files.join(files.getSdcardPath(), "Pictures", "Screenshots") // Build save directory
  files.create(`${filePath ? filePath : screenshotsPath}/`) // Create the save directory (if it does not exist)
  var timestamp = new Date().getTime() // Get the current timestamp
  var savePath = files.join(screenshotsPath ? screenshotsPath : screenshotsPath, name ? name : "screenshot_" + timestamp + ".png")
  if (screenshot) {
    images.save(screenshot, savePath) // Save the screenshot to the specified path
    // images.recycle()
    console.log("Screenshot save path: ", savePath)
    toast("Screenshot save path: ", savePath)
    screenshot.recycle()
    // uploadScreenshot(savePath)
    return savePath
  } else {
    alert("An error occurred", "Screen capture failed, please check whether the permission is enabled", function () {
      // global.robotStop()
      return null
    })
  }
}
onCaptureScreenshots()