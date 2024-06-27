var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = 'Hexn.io App Bot'

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
  log: 'Find color to play app'
}).then(x => {
  sleep(2000)
  utils.onFindImageAndClick({
    image: null,
    icon: files.join(utils.iconPath, 'start.png'),
    loop: 10,
    isPass: true,
    range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
    log: 'Click start'
  })
  sleep(6000)
  utils.onFindColorClickAsync({
    color: '#29cb93',
    point: { x1: 23, y1: 663, x2: 513, y2: 810 },
    loop: 20,
    isPass: true,
    range: { w: utils.rd.rd0400(), h: utils.rd.rd0100() },
    log: 'Click claim'
  }).then(y => {
    sleep(2000)
    utils.onFindColorClickAsync({
      color: '#1532a9',
      point: { x1: 23, y1: 663, x2: 513, y2: 810 },
      loop: 10,
      isPass: true,
      range: { w: utils.rd.rd0400(), h: utils.rd.rd0100() },
      log: 'Click farm'
    }).then(z => {
      sleep(5000)
    }).finally(() => {
      utils.killApp(telegram)
    })
  })
})