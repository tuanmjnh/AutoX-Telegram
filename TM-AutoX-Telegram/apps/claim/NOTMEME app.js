var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = 'NOTMEME app'

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
sleep(3000)
var openApp = utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'open_app.png'),
  loop: 10,
  isPass: true,
  range: { w: utils.rd.rd05(), h: utils.rd.rd05() },
  log: 'Click open app'
})
if (!openApp) {
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
      var y = e.y - 255
      utils.onClickArea({ x1: x, y1: y, x2: x + utils.rd.rd010(), y2: y + utils.rd.rd010(), log: 'Click menu start' })
      sleep(3000)
      y = e.y - 85
      utils.onClickArea({ x1: x, y1: y, x2: x + utils.rd.rd020(), y2: y + utils.rd.rd020(), log: 'Click open app' })
    }
  })
}
sleep(8000)
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'start.png'),
  loop: 10,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
  log: 'Click start'
})
sleep(2000)
utils.onFindColorClickAsync({
  color: '#ffff00',
  point: { x1: 35, y1: 858, x2: 506, y2: 926 },
  loop: 20,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
  log: 'Click start now'
}).then(x => {
  sleep(5000)
  utils.onFindColorClickAsync({
    color: '#ffff00',
    point: { x1: 150, y1: 780, x2: 380, y2: 850 },
    loop: 20,
    isPass: true,
    range: { w: utils.rd.rd0200(), h: utils.rd.rd050() },
    log: 'Click claim'
  }).then(x => {
    sleep(5000)
  }).finally(() => {
    utils.killApp(telegram)
  })
})
