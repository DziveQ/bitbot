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
            bitbot.buzz(true)
            basic.pause(100)
            bitbot.buzz(false)
        } else if (motor == 1) {
            motor = 0
            bitbot.buzz(true)
            basic.pause(100)
            bitbot.buzz(false)
        }
    } else if (receivedNumber == 3) {
        if (motor == 1) {
            bitbot.motor(BBMotor.Right, 759)
            bitbot.motor(BBMotor.Left, 200)
        }
    } else if (receivedNumber == 4) {
        if (motor == 1) {
            bitbot.rotatems(BBRobotDirection.Right, 60, 100)
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
