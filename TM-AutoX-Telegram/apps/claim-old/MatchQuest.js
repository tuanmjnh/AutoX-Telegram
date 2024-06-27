var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = 'MatchQuest'

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
var start = utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'MatchQuest_Launch.png'),
  loop: 3,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
  log: 'MatchQuest_Launch'
})
if (!start) {
  sleep(500)
  start = utils.onFindImageAndClick({
    image: null,
    icon: files.join(utils.iconPath, 'MatchQuest_ClaimNow.png'),
    loop: 3,
    isPass: true,
    range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
    log: 'Click MatchQuest_ClaimNow'
  })
}
if (!start) {
  sleep(500)
  start = utils.onFindImageAndClick({
    image: null,
    icon: files.join(utils.iconPath, 'MatchQuest_StartFarming.png'),
    loop: 3,
    isPass: true,
    range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
    log: 'Click MatchQuest_StartFarming'
  })
}
if (!start) {
  utils.onClickArea({ x1: 33, y1: 910, x2: 70, y2: 940, log: 'Click Menu' })
  sleep(1000)
  utils.onClickArea({ x1: 28, y1: 835, x2: 410, y2: 860, log: 'Click Start' })
  sleep(3000)
  utils.onClickArea({ x1: 118, y1: 750, x2: 388, y2: 780, log: 'Click Claim' })
  sleep(1500)
}
utils.onFindImageAndClick({
  image: null,
  icon: files.join(utils.iconPath, 'start.png'),
  loop: 10,
  isPass: true,
  range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
  log: 'Click start'
})
sleep(8000)
// swipe(250, 600, 280, 290, 600)
// sleep(2000)
utils.onFindColorClickAsync({
  color: '#ff4b4a',
  point: { x1: 45, y1: 780, x2: 480, y2: 850 },
  loop: 20,
  isPass: true,
  range: { x: 480, y: 850 },
  log: 'Find color to click claim'
}).then(x => {
  if (x) {
    sleep(2000)
    utils.onClickAreaAsync({ x1: 55, y1: 675, x2: 460, y2: 730, log: 'Click start farming' }).then(y => {
      sleep(2000)
      utils.onFindColorClickAsync({
        color: '#ffffff',
        point: { x1: 420, y1: 886, x2: 488, y2: 943 },
        loop: 20,
        isPass: true,
        range: { w: utils.rd.rd040(), h: utils.rd.rd040() },
        log: 'Click friend'
      }).then(z => {
        utils.onFindColorClickAsync({
          color: '#ff2f5f',
          point: { x1: 370, y1: 290, x2: 480, y2: 325 },
          loop: 20,
          isPass: true,
          range: { x: 480, y: 325 },
          log: 'Find color to click claim friend'
        }).then(_ => {
          sleep(3900)
        }).finally(() => {
          utils.killApp(telegram)
        })
      })
    })
  }
})