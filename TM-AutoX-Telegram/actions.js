"ui";
//#region utils
var utils = require(files.path(`./AutoX-Telegram/utils.js`))
setScreenMetrics(device.width, device.height)
files.create(`${utils.picturesPath}/`)
files.create(`${utils.screenshotsPath}/`)
files.create(`${utils.iconPath}/`)
//#endregion
//#region Main
main = () => {
  // var name = getPackageName("Telegram")
  // log(name)
  sleep(1000)
  home()
  sleep(1000)
  console.log(`Device pixel: width: ${device.width} - height: ${device.height}`)
  sleep(1000)
  var jsFiles = files.listDir(utils.rootApps, function (name) {
    return name.endsWith(".js") && files.isFile(files.join(utils.rootApps, name))
  })
  sleep(1000)

  // let e = engines.execScriptFile(files.join(utils.rootApps, jsFiles[0]))
  // var isDestroyed = false
  // do {
  //   sleep(5000)
  //   isDestroyed = e.getEngine().isDestroyed()
  //   log(isDestroyed)
  // } while (!isDestroyed)
  var i = 0
  var repeat = 0
  var isDestroyed = false
  while (true) {
    log(`Running: ${jsFiles[i]}`)
    var engine = engines.execScriptFile(files.join(utils.rootApps, jsFiles[i]))//,{ delay: 5000, interval:, loopTimes: 0 }
    isDestroyed = utils.isDestroyedEngine(engine, 5000)
    while (!isDestroyed) {
      sleep(2000)
    }
    i++
    if (i >= jsFiles.length) {
      i = 0
      repeat++
      log(`Repeat: ${repeat}`)
      sleep(10000)
    }
  }
  // jsFiles.forEach(e => {
  //   var engine = engines.execScriptFile(files.join(utils.rootApps, e))//,{ delay: 5000, interval:, loopTimes: 0 }
  //   isDestroyed = utils.isDestroyedEngine(engine, 5000)
  //   while (!isDestroyed) {
  //     sleep(2000)
  //   }
  // })
  sleep(5000)
}
//#endregion

// main()