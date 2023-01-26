def on_received_number(receivedNumber):
    if receivedNumber == 1:
        kBit.run(KBitDir.RUN_FORWARD, 20)
        kBit.led(KBitColor.GREEN)
        kBit.led_brightness(100)
    if receivedNumber == 2:
        kBit.run(KBitDir.RUN_BACK, 20)
        kBit.led(KBitColor.BLUE)
    if receivedNumber == 3:
        kBit.car_stop()
        kBit.led(KBitColor.RED)
    if receivedNumber == 4:
        kBit.run(KBitDir.TURN_LEFT, 20)
    if receivedNumber == 5:
        kBit.run(KBitDir.TURN_RIGHT, 20)
radio.on_received_number(on_received_number)
