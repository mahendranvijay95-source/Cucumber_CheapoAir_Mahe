Feature: OrangeHRM Admin Module - User Management
  As an Admin user
  I want to manage system users
  So that I can control employee access to the application

  @AddUser
  Scenario Outline: Add a new user with valid details
    Given I am logged in with valid credentials
    And I navigate to the Admin User Management page
    When I click on Add user
    And I enter employee name "<employeeName>"
    And I enter username "<username>"
    And I select role "<role>"
    And I select status "<status>"
    And I enter password "<password>"
    And I confirm password "<password>"
    And I save the user
    Then I should see the new user "<username>" in the user list

    Examples:
      | employeeName | username   | role       | status   | password   |
      | Linda Jane   | testUser01 | ESS        | Enabled  | Test@12345 |

  @SearchUser
  Scenario Outline: Search for an existing user
    Given I am logged in with valid credentials
    And I navigate to the Admin User Management page
    When I search for username "<username>"
    Then I should see the user "<username>" in the search results

    Examples:
      | username   |
      | testUser01 |

  @EditUser
  Scenario Outline: Edit user details
    Given I am logged in with valid credentials
    And I navigate to the Admin User Management page
    When I search for username "<username>"
    And I edit the user role to "<newRole>"
    And I save the changes
    Then I should see the updated role "<newRole>" for user "<username>"

    Examples:
      | username   | newRole   |
      | testUser01 | Admin     |

  @DeleteUser
  Scenario Outline: Delete a user
    Given I am logged in with valid credentials
    And I navigate to the Admin User Management page
    When I search for username "<username>"
    And I delete the user "<username>"
    Then I should not see the user "<username>" in the user list

    Examples:
      | username   |
      | testUser01 |
