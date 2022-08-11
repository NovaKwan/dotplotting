basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(300)
        led.unplot(index, 0)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4, index)
        basic.pause(300)
        led.unplot(4, index)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, 4)
        basic.pause(300)
        led.unplot(4 - index, 4)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 4 - index)
        basic.pause(300)
        led.unplot(0, 4 - index)
    }
})
