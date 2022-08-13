/**
 * -the playtone often kill both inputs and outpus that all sound and input triggers will have no repsonse
 * 
 * -it strangely work fine after adding 
 * 
 * analog set pitch pin p0,
 */
function do_square () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        playtone()
        basic.pause(pausetime)
        led.unplot(index, 0)
    }
    for (let index2 = 0; index2 <= 4; index2++) {
        led.plot(4, index2)
        playtone()
        basic.pause(pausetime)
        led.unplot(4, index2)
    }
    for (let index3 = 0; index3 <= 4; index3++) {
        led.plot(4 - index3, 4)
        playtone()
        basic.pause(pausetime)
        led.unplot(4 - index3, 4)
    }
    for (let index4 = 0; index4 <= 4; index4++) {
        led.plot(0, 4 - index4)
        playtone()
        basic.pause(pausetime)
        led.unplot(0, 4 - index4)
    }
}
function playtone () {
    if (soundflag == true) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
}
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
    for (let index_y2 = 0; index_y2 <= 4; index_y2++) {
        for (let index_x2 = 0; index_x2 <= 4; index_x2++) {
            if (flag == -1) {
                resultx = 4 - index_x2
            } else {
                resultx = index_x2
            }
            led.plot(resultx, 4 - index_y2)
            playtone()
            basic.pause(pausetime / 3)
            led.unplot(resultx, 4 - index_y2)
        }
        flag = flag * -1
    }
    flag = 1
}
input.onSound(DetectedSound.Loud, function () {
    mysndtrigged()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.plot(4, 4)
    basic.pause(100)
    led.unplot(4, 4)
    if (soundflag == true) {
        soundflag = false
    } else {
        soundflag = true
    }
})
function mysndtrigged () {
    input.onSound(DetectedSound.Loud, function (){})
led.plot(4, 4)
    basic.pause(100)
    led.unplot(4, 4)
    if (soundflag == true) {
        soundflag = false
    } else {
        soundflag = true
    }
    input.onSound(DetectedSound.Loud,mysndtrigged)
}
let resultx = 0
let flag = 0
let pausetime = 0
let soundflag = false
input.setSoundThreshold(SoundThreshold.Loud, 225)
soundflag = true
pausetime = 150
flag = 1
music.setVolume(58)
pins.analogSetPitchPin(AnalogPin.P0)
basic.forever(function () {
    do_square()
    do_z()
})
