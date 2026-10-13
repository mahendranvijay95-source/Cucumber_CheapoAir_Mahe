Feature: Flight booking on Cheapoair
@cheapAir
  Scenario: Book a round-trip flight with multiple travelers
    Given I open Cheapoair in Chrome
    And I close initial popups
    And I select "Flights" tab
    And I choose "Round-trip"
    And I add 4 adults and 4 seniors
    And I enter departure as "MAA" and destination as "DEL"
    And I select departure date "12 October 2026" and return date "15 October 2026"
    When I search for flights
    Then I select the first available flight
    And I fill traveler details
    And I proceed to payment
