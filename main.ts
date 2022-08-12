function do_z () {
    for (let index_y = 0; index_y <= 4; index_y++) {
        for (let index_x = 0; index_x <= 4; index_x++) {
            if (flag == -1) {
                resultx = 4 - index_x
            } else {
                resultx = index_x
            }
            led.plot(resultx, index_y)
            playtone()
            basic.pause(pausetime)
            led.unplot(resultx, index_y)
        }
        flag = flag * -1
    }
    for (let index_y = 0; index_y <= 4; index_y++) {
        for (let index_x = 0; index_x <= 4; index_x++) {
            if (flag == -1) {
                resultx = 4 - index_x
            } else {
                resultx = index_x
            }
            led.plot(resultx, 4 - index_y)
            playtone()
            basic.pause(pausetime / 3)
            led.unplot(resultx, 4 - index_y)
        }
        flag = flag * -1
    }
    flag = 1
}
function playtone () {
    if (soundflag == true) {
        music.playTone(100, music.beat(BeatFraction.Quarter))
    }
}
function do_square () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        playtone()
        basic.pause(pausetime)
        led.unplot(index, 0)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4, index)
        playtone()
        basic.pause(pausetime)
        led.unplot(4, index)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, 4)
        playtone()
        basic.pause(pausetime)
        led.unplot(4 - index, 4)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 4 - index)
        playtone()
        basic.pause(pausetime)
        led.unplot(0, 4 - index)
    }
}
input.onSound(DetectedSound.Loud, function () {
    if (soundflag == true) {
        soundflag = false
    } else {
        soundflag = true
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (soundflag == true) {
        soundflag = false
    } else {
        soundflag = true
    }
})
let resultx = 0
let flag = 0
let pausetime = 0
let soundflag = false
input.setSoundThreshold(SoundThreshold.Loud, 225)
soundflag = true
pausetime = 150
flag = 1
basic.forever(function () {
    do_square()
    do_z()
})
