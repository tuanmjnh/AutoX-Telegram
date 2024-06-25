var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = 'Tiger bot'

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
  color: '#dd3236',
  point: { x1: 263, y1: 761, x2: 287, y2: 777 },
  loop: 20,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
  log: 'Find color to play app'
}).then(x => {
  utils.onFindColorClickAsync({
    color: '#0b2c21',
    point: { x1: 137, y1: 240, x2: 345, y2: 285 },
    loop: 20,
    isPass: true,
    range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
    log: 'Wait opened app'
  }).then(y => {
    utils.onFindColorClickAsync({
      color: '#5c554c',
      point: { x1: 182, y1: 725, x2: 358, y2: 768 },
      loop: 20,
      isPass: true,
      range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
      log: 'Click mining'
    }).then(z => {
      utils.onClickArea({ x1: 182, y1: 725, x2: 358, y2: 768 })
    }).finally(() => {
      sleep(5000)
      utils.killApp(telegram)
    })
  })
})