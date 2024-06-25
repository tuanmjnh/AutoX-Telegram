var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = 'CYBASE Farm Bot'

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
  sleep(5000)
  swipe(260, 830, 260, 500, 600)
  sleep(2000)
  swipe(260, 630, 260, 285, 600)
  sleep(2000)
  swipe(260, 350, 260, 285, 600)
  sleep(3000)
  utils.onFindColorClickAsync({
    color: '#17a748',
    point: { x1: 20, y1: 630, x2: 516, y2: 750 },
    loop: 20,
    isPass: true,
    range: { w: utils.rd.rd0400(), h: utils.rd.rd0100() },
    log: 'Click claim'
  }).then(y => {
    if (y) {
      sleep(5000)
      click(y.x, y.y)//Start farming
      sleep(5000)
    } else {
      sleep(1000)
      utils.onFindColorClickAsync({
        color: '#b946e7',
        point: { x1: 38, y1: 645, x2: 506, y2: 730 },
        loop: 20,
        isPass: true,
        range: { w: utils.rd.rd0300(), h: utils.rd.rd050() },
        log: 'Click start farmning'
      }).then(() => {
        sleep(6900)
      }).finally(() => {
        utils.killApp(telegram)
      })
    }
  })
})