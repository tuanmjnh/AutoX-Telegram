var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = 'snapster trading bot'

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
utils.onFindColorClickAsync({
  color: '#448bcc',
  point: { x1: 35, y1: 900, x2: 143, y2: 946 },
  loop: 20,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
  log: 'Find color to click menu'
}).then(e => {
  if (e) {
    sleep(1000)
    var x = e.x
    var y = e.y - 65
    utils.onClickArea({ x1: x, y1: y, x2: x + utils.rd.rd020(), y2: y + utils.rd.rd010(), log: 'Click menu start' })
    sleep(3000)
    y = e.y - 160
    utils.onClickArea({ x1: x, y1: y, x2: x + utils.rd.rd020(), y2: y + utils.rd.rd020(), log: 'Click open app' })
    sleep(3000)
    utils.onFindImageAndClick({
      image: null,
      icon: files.join(utils.iconPath, 'start.png'),
      loop: 10,
      isPass: true,
      range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
      log: 'Click start'
    })
  }
  sleep(4000)
  utils.onFindColorClickAsync({
    color: '#62bfff',
    point: { x1: 381, y1: 384, x2: 485, y2: 548 },
    loop: 30,
    isPass: true,
    range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
    log: 'Click claim'
  }).then(z => {
    sleep(5000)
  }).finally(() => {
    utils.killApp(telegram)
  })
})
