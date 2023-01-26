radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 1) {
        kBit.run(KBitDir.RunForward, 20)
        kBit.led(KBitColor.Green)
        kBit.ledBrightness(100)
    }
    
    if (receivedNumber == 2) {
        kBit.run(KBitDir.RunBack, 20)
        kBit.led(KBitColor.Blue)
    }
    
    if (receivedNumber == 3) {
        kBit.carStop()
        kBit.led(KBitColor.Red)
    }
    
    if (receivedNumber == 4) {
        kBit.run(KBitDir.TurnLeft, 20)
    }
    
    if (receivedNumber == 5) {
        kBit.run(KBitDir.TurnRight, 20)
    }
    
})
