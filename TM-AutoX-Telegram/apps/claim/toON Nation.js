// try {
//   System.loadLibrary("opencv_java4"); // Ensure the library is loaded
//   console.log("OpenCV library loaded successfully.");
// } catch (err) {
//   console.error("Failed to load OpenCV library: " + err);
//   exit();
// }

var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = 'toON Nation'

if (!requestScreenCapture()) toast("Screenshot request failed")

utils.killApp(telegram)
sleep(1000)
launchApp(telegram)
sleep(5000)
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'search.png'),
  loop: 30,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd10() },
  log: 'Click search'
})
sleep(2000)
utils.onTypingText(id, `Typing ${id}`)
sleep(5000)
utils.onClickArea({ x1: 138, y1: 236, x2: 400, y2: 268, log: 'Click app after search' })
sleep(1500)
utils.onClickArea({ x1: 33, y1: 910, x2: 70, y2: 940, log: 'Click Start' })
sleep(1500)
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'start.png'),
  loop: 3,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
  log: 'Click start'
})
sleep(8000)
utils.onFindColorClickAsync({
  color: '#dd7602',
  point: { x1: 370, y1: 222, x2: 436, y2: 311 },
  loop: 20,
  isPass: true,
  log: 'Find color to check app opened'
}).then(x => {
  if (x) {
    sleep(1000)
    swipe(250, 600, 280, 290, 600)
    sleep(2000)
    var collect = utils.onFindImageAndClick({
      icon: files.join(utils.iconPath, 'toon_nation_collect.png'),
      loop: 3,
      isPass: true,
      range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
      log: 'Click collect'
    })
    if (!collect) {
      sleep(100)
      utils.onFindImageAndClick({
        icon: files.join(utils.iconPath, 'toon_nation_collect2.png'),
        loop: 3,
        isPass: true,
        range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
        log: 'Click collect'
      })
    }
  }
}).finally(() => {
  sleep(5000)
  utils.killApp(telegram)
})
