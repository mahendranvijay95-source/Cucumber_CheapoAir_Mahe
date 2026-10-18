Feature: Keyboard Functionality

    @scen_outline
    Scenario Outline: key functions1
        Given Keyboard connected to Laptop or desktop
        When Press the key <key1>
        And  Press the key <key2>
        And  Press the key <key3>
        Then Pressed keys should appear on the screen
        Examples:
            | key1 | key2 | key3 |
            | A    | B    | C    |
            | D    | E    | F    |
            | G    | H    | I    |
    @rowHashes
    Scenario: Key combinations1
        Given Keyboard connected to desktop
        When Select the text
        And  Press the key <Combkey1>
        And  Press the key <Combkey2>
            | Combkey1  | Combkey2   |
            | CtrlplusC | CtrlplusV  |
            | shiftA    | shiftspace |
