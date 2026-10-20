Feature: OrangeHRM Dashboard Validation
  As a logged-in user
  I want to verify the dashboard widgets and navigation
  So that I can ensure the application loads correctly after login

  @DashboardHeader
  Scenario: Verify Dashboard header is displayed
    Given I am logged in with valid credentials
    When I navigate to the dashboard
    Then I should see the header "Dashboard"

  @QuickLaunch
  Scenario: Verify Quick Launch panel is visible
    Given I am logged in with valid credentials
    When I navigate to the dashboard
    Then I should see the Quick Launch shortcuts
      | Assign Leave |
      | Leave List   |
      | Timesheets   |

  @EmployeeDistribution
  Scenario: Verify Employee Distribution widget is visible
    Given I am logged in with valid credentials
    When I navigate to the dashboard
    Then I should see the Employee Distribution by Subunit widget

  @PendingLeave
  Scenario: Verify Pending Leave Requests widget is visible
    Given I am logged in with valid credentials
    When I navigate to the dashboard
    Then I should see the Pending Leave Requests widget

  @SidebarNavigation
  Scenario Outline: Verify sidebar navigation works
    Given I am logged in with valid credentials
    When I click on the "<module>" menu item
    Then I should be redirected to the "<pageTitle>" page

    Examples:
      | module      | pageTitle   |
      | Admin       | Admin       |
      | PIM         | PIM         |
      | Leave       | Leave       |
      | Recruitment | Recruitment |
