var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = '@UTXORD'

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
  range: { w: utils.rd.rd020(), h: utils.rd.rd020() },
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
  sleep(6900)
  utils.onFindColorClickAsync({
    color: '#3ce5a2',
    point: { x1: 45, y1: 815, x2: 490, y2: 833 },
    loop: 20,
    isPass: true,
    range: { w: utils.rd.rd0400(), h: utils.rd.rd010() },
    log: 'Click collect'
  }).then(x => {
    sleep(5000)
  })
}).finally(() => {
  utils.killApp(telegram)
})
