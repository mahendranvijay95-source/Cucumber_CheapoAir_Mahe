Feature: Lift functionality
    @Hashes
    Scenario: Lift Door Function
        Given Lift is fixed in apartment and Door is Open at GF
        When Press <button1> button in keypad
        And Press <button2> button in keypad
            | button1    | button2     |
            | openbutton | closebutton |
   # @rowHashes
    Scenario: Lift Movement
        Given Lift is Operational
        When Get inside and pressed Floor number <floorbtn1>
        And  pressed Floor number <floorbtn2>
            | floorbtn1  | floorbtn2  |
            | thirdfloor | sixthfloor |