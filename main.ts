radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (motor == 1) {
            bitbot.go(BBDirection.Forward, 100)
        }
    } else if (receivedNumber == 0) {
        if (motor == 1) {
            bitbot.stop(BBStopMode.Brake)
        }
    } else if (receivedNumber == 2) {
        if (motor == 0) {
            motor = 1
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        } else if (motor == 1) {
            motor = 0
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        }
    } else if (receivedNumber == 11) {
        bitbot.setLedColor(0xffffff)
    } else if (receivedNumber == 12) {
        bitbot.ledRainbow()
    } else if (receivedNumber == 0) {
        bitbot.ledClear()
    }
})
let motor = 0
radio.setGroup(5)
