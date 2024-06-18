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
sleep(4000)
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'search.png'),
  width: utils.rd.rd020(),
  height: utils.rd.rd020(),
  loop: 3,
  isPass: true,
  isClick: true,
  log: 'Click search'
})
sleep(2000)
utils.onTypeText(id, 'Type App name')
sleep(5000)
utils.onClickArea({ x1: 138, y1: 236, x2: 400, y2: 268, log: 'Click app after search' })
sleep(1500)
utils.onClickArea({ x1: 33, y1: 910, x2: 70, y2: 940, log: 'Click Start' })
sleep(1500)
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'start.png'),
  width: utils.rd.rd010(),
  height: utils.rd.rd010(),
  loop: 3,
  isPass: true,
  isClick: true,
  log: 'Click start'
})
sleep(8000)
utils.onFindColorClick({
  color: '#dd7602',
  point: { x1: 397, y1: 256, x2: 415, y2: 269 },
  loop: 20,
  isPass: true,
  log: 'Find color to check app opened'
}).then(x => {
  log(x)
  if (x) {
    sleep(3000)
    swipe(250, 600, 280, 290, 600)
    sleep(2000)
    utils.onFindImageAndClick({
      icon: files.join(utils.iconPath, 'toon_nation_collect.png'),
      width: utils.rd.rd010(),
      height: utils.rd.rd010(),
      loop: 3,
      isPass: true,
      isClick: true,
      log: 'Click collect'
    })
    sleep(100)
    utils.onFindImageAndClick({
      icon: files.join(utils.iconPath, 'toon_nation_collect2.png'),
      width: utils.rd.rd010(),
      height: utils.rd.rd010(),
      loop: 3,
      isPass: true,
      isClick: true,
      log: 'Click collect'
    })
    sleep(5000)
    utils.killApp(telegram)
  } else {
    sleep(5000)
    utils.killApp(telegram)
  }
})
