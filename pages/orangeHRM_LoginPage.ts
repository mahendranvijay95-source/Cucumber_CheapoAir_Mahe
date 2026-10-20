import { Page } from "playwright";

export class LoginPage {
  private page: Page;

  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private loginButton = 'button[type="submit"]';
  private errorMessage = ".oxd-alert-content-text";
  private dashboardHeader = "h6";
  private welcomeDropdown = ".oxd-userdropdown-name";
  private logoutOption = "text=Logout";

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async getErrorMessage(): Promise<string | null> {
    return await this.page.locator(this.errorMessage).textContent();
  }

  async getDashboardHeader(): Promise<string | null> {
    return await this.page.locator(this.dashboardHeader).textContent();
  }

  async getWelcomeMessage(): Promise<string | null> {
    return await this.page.locator(this.welcomeDropdown).textContent();
  }

  async logout() {
    await this.page.locator(this.welcomeDropdown).click();
    await this.page.locator(this.logoutOption).click();
  }
}
