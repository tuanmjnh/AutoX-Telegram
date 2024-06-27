var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = 'Sphynx'

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
sleep(2000)
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
  sleep(9000)
  utils.onFindColorClickAsync({
    color: '#10c6fe',
    point: { x1: 193, y1: 700, x2: 350, y2: 808 },
    loop: 20,
    isPass: true,
    range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
    log: 'Click claim spin'
  }).then(y => {
    sleep(2000)
    utils.onFindColorClickAsync({
      color: '#eab45c',
      point: { x1: 435, y1: 354, x2: 509, y2: 407 },
      loop: 20,
      isPass: true,
      range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
      log: 'Click minning'
    }).then(z => {
      sleep(3000)
      utils.onFindColorClickAsync({
        color: '#925c00',
        point: { x1: 388, y1: 628, x2: 507, y2: 689 },
        loop: 20,
        isPass: true,
        range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
        log: 'Click claim bless'
      }).then(v => {
        sleep(8000)
      }).finally(() => {
        utils.killApp(telegram)
      })
    })
  })
})