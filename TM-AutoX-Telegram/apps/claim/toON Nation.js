var utils = require(files.path(`./AutoX-Telegram/utils.js`))
var telegram = 'Telegram'
var id = 'toON Nation'
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
sleep(11000)
swipe(250, 600, 280, 290, 600)
sleep(3000)
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'toon_nation_collect.png'),
  width: utils.rd.rd010(),
  height: utils.rd.rd010(),
  loop: 3,
  isPass: true,
  isClick: true,
  log: 'Click collect'
})
sleep(1000)
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'toon_nation_collect2.png'),
  width: utils.rd.rd010(),
  height: utils.rd.rd010(),
  loop: 3,
  isPass: true,
  isClick: true,
  log: 'Click collect'
})
sleep(10000)
utils.killApp(telegram)