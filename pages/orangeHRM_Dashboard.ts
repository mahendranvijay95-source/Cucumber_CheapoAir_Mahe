import { Page } from "playwright";

export class DashboardPage {
  private page: Page;

  private dashboardHeader = "h6"; 
  private quickLaunchPanel = ".oxd-dashboard-widget .oxd-grid-item"; // Quick Launch items
  private employeeDistributionWidget = "div.orangehrm-dashboard-widget:nth-child(3)";
  private pendingLeaveWidget = "div.orangehrm-dashboard-widget:nth-child(4)";
  private sidebarMenu = ".oxd-sidepanel-body .oxd-main-menu-item";
  private pageTitle = "h6"; 

  constructor(page: Page) {
    this.page = page;
  }

  async waitForDashboardLoad() {
    await this.page.waitForSelector(this.dashboardHeader, { timeout: 10000 });
  }

  async getDashboardHeader(): Promise<string | null> {
    return await this.page.locator(this.dashboardHeader).textContent();
  }

  async getQuickLaunchItems(): Promise<string[]> {
    const items = await this.page.locator(this.quickLaunchPanel).allTextContents();
    return items.map(item => item.trim());
  }

  async isEmployeeDistributionVisible(): Promise<boolean> {
    return await this.page.locator(this.employeeDistributionWidget).isVisible();
  }

  async isPendingLeaveVisible(): Promise<boolean> {
    return await this.page.locator(this.pendingLeaveWidget).isVisible();
  }

  async clickSidebarMenu(module: string) {
    await this.page.locator(this.sidebarMenu, { hasText: module }).click();
  }

  async getPageTitle(): Promise<string | null> {
    return await this.page.locator(this.pageTitle).textContent();
  }
}
