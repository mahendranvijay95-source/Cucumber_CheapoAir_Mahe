Feature: Adactin hotel booking
#First Change
@adactinLogin
Scenario: Login Page validation
  Given Open Adactin login page
  When Enter credentials
    | userName | MahendranErusan |
    | password | Test@673309     |
  Then User should be logged in successfully


