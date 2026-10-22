import { Page } from "playwright";

export class AdminPage {
  private page: Page;

  // Locators
  private adminMenu = "span:has-text('Admin')";
  private userManagementMenu = "span:has-text('User Management')";
  private usersMenu = "a:has-text('Users')";
  private addButton = "button:has-text('Add')";
  private employeeNameInput = "input[placeholder='Type for hints...']";
  private usernameInput = "input[name='username']";
  private roleDropdown = "div[role='listbox']";
  private statusDropdown = "div[role='listbox']";
  private passwordInput = "input[name='password']";
  private confirmPasswordInput = "input[name='confirmPassword']";
  private saveButton = "button:has-text('Save')";
  private searchUsernameInput = "input[name='searchUsername']";
  private searchButton = "button:has-text('Search')";
  private userTableRows = ".oxd-table-body .oxd-table-row";
  private editButton = "button:has-text('Edit')";
  private deleteButton = "button:has-text('Delete')";
  private confirmDeleteButton = "button:has-text('Yes, Delete')";

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to Admin → User Management → Users
  async gotoUserManagement() {
    await this.page.click(this.adminMenu);
    await this.page.click(this.userManagementMenu);
    await this.page.click(this.usersMenu);
  }

  // Add user actions
  async clickAddUser() {
    await this.page.click(this.addButton);
  }

  async enterEmployeeName(name: string) {
    await this.page.fill(this.employeeNameInput, name);
    // Select first suggestion if available
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async selectRole(role: string) {
    await this.page.locator("label:has-text('User Role')").click();
    await this.page.locator(this.roleDropdown).getByText(role).click();
  }

  async selectStatus(status: string) {
    await this.page.locator("label:has-text('Status')").click();
    await this.page.locator(this.statusDropdown).getByText(status).click();
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async confirmPassword(password: string) {
    await this.page.fill(this.confirmPasswordInput, password);
  }

  async saveUser() {
    await this.page.click(this.saveButton);
  }

  // Search user
  async searchUser(username: string) {
    await this.page.fill(this.searchUsernameInput, username);
    await this.page.click(this.searchButton);
    await this.page.waitForSelector(this.userTableRows);
  }

  async isUserInList(username: string): Promise<boolean> {
    const rows = await this.page.locator(this.userTableRows).allTextContents();
    return rows.some(row => row.includes(username));
  }

  // Edit user
  async editUserRole(newRole: string) {
    await this.page.click(this.editButton);
    await this.selectRole(newRole);
  }

  async getUserRole(username: string): Promise<string | null> {
    const row = await this.page.locator(this.userTableRows, { hasText: username }).textContent();
    return row ? row.trim() : null;
  }

  // Delete user
  async deleteUser(username: string) {
    const row = this.page.locator(this.userTableRows, { hasText: username });
    await row.locator(this.deleteButton).click();
    await this.page.click(this.confirmDeleteButton);
  }
}
