var utils = require(files.path(`./utils.js`))
var telegram = 'Telegram'
var id = '@HOT Wallet'

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
  color: '#fdbf1c',
  point: { x1: 150, y1: 160, x2: 290, y2: 868 },
  loop: 20,
  isPass: true,
  range: { w: utils.rd.rd050(), h: utils.rd.rd050() },
  log: 'Click open app'
}).then(o => {
  if (!o) {
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
        var y = e.y - 120
        utils.onClickArea({ x1: x, y1: y, x2: x + utils.rd.rd020(), y2: y + utils.rd.rd010(), log: 'Click menu app' })
        sleep(2000)
      }
    })
  }
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
    color: '#ebdedc',
    point: { x1: 370, y1: 760, x2: 500, y2: 830 },
    loop: 3,
    isPass: true,
    log: 'Click fix app'
  }).then(f => {
    if (!f) click(500, 830)
    sleep(3000)
    swipe(230, 830, 230, 250, random(200, 600))
    sleep(random(1500, 2500))
    swipe(222, 630, 222, 385, random(200, 600))
    sleep(random(1500, 2500))
    swipe(226, 350, 226, 235, random(200, 600))
    sleep(random(1500, 2500))
    swipe(230, 830, 230, 250, random(200, 600))
    sleep(random(1500, 2500))
    swipe(222, 630, 222, 385, random(200, 600))
    sleep(random(1500, 2500))
    swipe(226, 350, 226, 235, random(200, 600))
    sleep(random(1500, 2500))
    swipe(230, 830, 230, 250, random(200, 600))
    sleep(1000)
    utils.onFindColorClickAsync({
      color: '#fbc469',
      point: { x1: 309, y1: 360, x2: 357, y2: 386 },
      loop: 20,
      isPass: true,
      range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
      log: 'Click open mining'
    }).then(x => {
      utils.onFindColorClickAsync({
        color: '#fd84e3',
        point: { x1: 300, y1: 615, x2: 469, y2: 725 },
        loop: 5,
        isPass: true,
        range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
        log: 'Click check news'
      }).then(z => {
        if (z) {
          sleep(2000)
          back()
          sleep(2000)
          click(z.x + utils.rd.rd010(), z.y + utils.rd.rd010())
        } else {
          utils.onFindColorClickAsync({
            color: '#fdbf1e',
            point: { x1: 300, y1: 615, x2: 469, y2: 725 },
            loop: 5,
            isPass: true,
            range: { w: utils.rd.rd010(), h: utils.rd.rd010() },
            log: 'Click claim'
          }).then(v => {
            sleep(8000)
          }).finally(() => {
            utils.killApp(telegram)
          })
        }
        sleep(8000)
      }).finally(() => {
        utils.killApp(telegram)
      })
    })
  })
})