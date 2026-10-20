Feature: OrangeHRM Login Functionality
  As a user of OrangeHRM
  I want to log in with valid credentials
  So that I can access the application securely

  @ValidLogin
  Scenario Outline: Successful login with valid credentials
    Given I open the OrangeHRM login page
    When I enter username "<username>" and password "<password>"
    And I click on the Login button
    Then I should be redirected to the dashboard
    And I should see the welcome message

    Examples:
      | username | password |
      | Admin    | admin123 |

  @InvalidLogin
  Scenario Outline: Login attempt with invalid credentials
    Given I open the OrangeHRM login page
    When I enter username "<username>" and password "<password>"
    And I click on the Login button
    Then I should see an error message "Invalid credentials"

    Examples:
      | username | password   |
      | Admin    | wrongpass  |
      | WrongUsr | admin123   |

  @EmptyFields
  Scenario: Login attempt with empty username and password
    Given I open the OrangeHRM login page
    When I leave username and password fields empty
    And I click on the Login button
    Then I should see validation messages for required fields

  @Logout
  Scenario: Successful logout
    Given I am logged in with valid credentials
    When I click on the Logout option
    Then I should be redirected back to the login page
