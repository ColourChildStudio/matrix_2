monitors.setup(
1,
DigitalPin.P1,
DigitalPin.P8,
DigitalPin.P0
)
basic.forever(function () {
    monitors.scrollText("Hello world!", 75, 500)
})
