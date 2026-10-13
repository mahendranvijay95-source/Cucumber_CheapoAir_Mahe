Feature: Fan
    Background: common
        Given fan is connected
    Scenario: Switch on the fan
        When Press the switch on
        Then Fan start rotating
   # @rowHashes
    Scenario: control the fan speed
        When Fan is rotating
        And Adjust the <speed1>
        And  Adjust the <speed2>
            | speed1 | speed2 |
            | five   | three  |
            | six    | two    |

