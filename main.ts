input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # . . .
        # . . # .
        # . . . .
        # . . # .
        . # . . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . # .
        . # . . #
        . . . . #
        . # . . #
        . . . # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        `)
})
basic.forever(function () {
	
})
