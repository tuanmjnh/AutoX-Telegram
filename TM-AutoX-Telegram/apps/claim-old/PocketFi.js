var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = 'PocketFi'

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
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'PocketFi_Mining.png'),
  loop: 3,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
  log: 'Click PocketFi_Mining'
})
sleep(1500)
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'start.png'),
  loop: 3,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
  log: 'Click start'
})
sleep(5000)
var claim = utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'PocketFi_ClaimSwitch.png'),
  loop: 3,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
  log: 'Click Claim switch'
})
if (!claim) {
  sleep(11000)
  utils.onFindImageAndClick({
    image: null,
    icon: files.join(utils.iconPath, 'PocketFi_GoMining.png'),
    loop: 3,
    isPass: true,
    range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
    log: 'Click PocketFi_GoMining'
  })
  sleep(3000)
  var claim = utils.onFindImageAndClick({
    image: null,
    icon: files.join(utils.iconPath, 'PocketFi_ClaimSwitch.png'),
    loop: 3,
    isPass: true,
    range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
    log: 'Click Claim switch'
  })
}
sleep(10000)
utils.killApp(telegram)