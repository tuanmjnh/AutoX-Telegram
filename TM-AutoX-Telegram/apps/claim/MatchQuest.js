var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = 'MatchQuest'

if (!requestScreenCapture())  toast("Screenshot request failed")

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
var start = utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'MatchQuest_Launch.png'),
  width: utils.rd.rd010(),
  height: utils.rd.rd010(),
  loop: 3,
  isPass: true,
  isClick: true,
  log: 'MatchQuest_Launch'
})
if (!start) {
  sleep(500)
  start = utils.onFindImageAndClick({
    image: null,
    icon: files.join(utils.iconPath, 'MatchQuest_ClaimNow.png'),
    width: utils.rd.rd010(),
    height: utils.rd.rd010(),
    loop: 3,
    isPass: true,
    isClick: true,
    log: 'Click MatchQuest_ClaimNow'
  })
}
if (!start) {
  sleep(500)
  start = utils.onFindImageAndClick({
    image: null,
    icon: files.join(utils.iconPath, 'MatchQuest_StartFarming.png'),
    width: utils.rd.rd010(),
    height: utils.rd.rd010(),
    loop: 3,
    isPass: true,
    isClick: true,
    log: 'Click MatchQuest_StartFarming'
  })
}
if (!start) {
  utils.onClickArea({ x1: 33, y1: 910, x2: 70, y2: 940, log: 'Click Menu' })
  sleep(1000)
  utils.onClickArea({ x1: 28, y1: 835, x2: 410, y2: 860, log: 'Click Start' })
  sleep(3000)
  utils.onClickArea({ x1: 118, y1: 750, x2: 388, y2: 780, log: 'Click Claim' })
  sleep(1500)
}
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
sleep(9000)
swipe(250, 600, 280, 290, 600)
sleep(2000)
// utils.onFindImageAndClick({
//   image: null,
//   icon: files.join(utils.iconPath, 'toon_nation_collect.png'),
//   width: utils.rd.rd010(),
//   height: utils.rd.rd010(),
//   loop: 3,
//   isPass: true,
//   isClick: true,
//   log: 'Click collect'
// })
// sleep(1000)
// utils.onFindImageAndClick({
//   image: null,
//   icon: files.join(utils.iconPath, 'toon_nation_collect2.png'),
//   width: utils.rd.rd010(),
//   height: utils.rd.rd010(),
//   loop: 3,
//   isPass: true,
//   isClick: true,
//   log: 'Click collect'
// })
sleep(10000)
utils.killApp(telegram)