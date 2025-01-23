let data: NumberFormat = 0
pins.setPull(100, PinPullMode.PullDown)
basic.forever(function () {
    data = input.buttonIsPressed(Button.A) ? 1 : 0
    console.logValue("data", data)
    basic.pause(200)
})

