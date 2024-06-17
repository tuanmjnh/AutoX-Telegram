var utils = require(files.path(`./AutoX-Telegram/utils.js`))
var telegram = 'Telegram'
var id = 'PocketFi'
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
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'PocketFi_Mining.png'),
  width: utils.rd.rd010(),
  height: utils.rd.rd010(),
  loop: 3,
  isPass: true,
  isClick: true,
  log: 'Click PocketFi_Mining'
})
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
sleep(5000)
var claim= utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'PocketFi_ClaimSwitch.png'),
  width: utils.rd.rd010(),
  height: utils.rd.rd010(),
  loop: 3,
  isPass: true,
  isClick: true,
  log: 'Click Claim switch'
})
if (!claim) {
  sleep(11000)
  utils.onFindImageAndClick({
    image: null,
    icon: files.join(utils.iconPath, 'PocketFi_GoMining.png'),
    width: utils.rd.rd010(),
    height: utils.rd.rd010(),
    loop: 3,
    isPass: true,
    isClick: true,
    log: 'Click PocketFi_GoMining'
  })
  sleep(3000)
  var claim = utils.onFindImageAndClick({
    image: null,
    icon: files.join(utils.iconPath, 'PocketFi_ClaimSwitch.png'),
    width: utils.rd.rd010(),
    height: utils.rd.rd010(),
    loop: 3,
    isPass: true,
    isClick: true,
    log: 'Click Claim switch'
  })
}
sleep(10000)
utils.killApp(telegram)