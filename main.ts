radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Forward, 40)
    } else if (receivedNumber == 0) {
        bitbot.stop(BBStopMode.Coast)
    }
})
radio.setGroup(5)