import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { LoginPage } from "../pages/orangeHRM_LoginPage";
import { DashboardPage } from "../pages/orangeHRM_Dashboard";
import * as dotenv from "dotenv";

dotenv.config();

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let dashboardPage: DashboardPage;

Given("I logged in with valid credentials", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);

  const url = process.env.ORANGEHRM_URL as string;
  await loginPage.goto(url);

  const username = process.env.ORANGEHRM_USERNAME as string;
  const password = process.env.ORANGEHRM_PASSWORD as string;

  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();
});

When("I navigate to the dashboard", async function () {
  await dashboardPage.waitForDashboardLoad();
});

Then("I should see the header {string}", async function (expectedHeader: string) {
  const header = await dashboardPage.getDashboardHeader();
  if (!header?.includes(expectedHeader)) {
    throw new Error(`Expected header "${expectedHeader}", but got "${header}"`);
  }
});

Then("I should see the Quick Launch shortcuts", async function (dataTable) {
  const shortcuts = await dashboardPage.getQuickLaunchItems();
  const expectedShortcuts = dataTable.raw().flat();
  for (const item of expectedShortcuts) {
    if (!shortcuts.includes(item)) {
      throw new Error(`Quick Launch item "${item}" not found!`);
    }
  }
});

Then("I should see the Employee Distribution by Subunit widget", async function () {
  const isVisible = await dashboardPage.isEmployeeDistributionVisible();
  if (!isVisible) {
    throw new Error("Employee Distribution widget not visible!");
  }
});

Then("I should see the Pending Leave Requests widget", async function () {
  const isVisible = await dashboardPage.isPendingLeaveVisible();
  if (!isVisible) {
    throw new Error("Pending Leave Requests widget not visible!");
  }
});

When("I click on the {string} menu item", async function (module: string) {
  await dashboardPage.clickSidebarMenu(module);
});

Then("I should be redirected to the {string} page", async function (pageTitle: string) {
  const title = await dashboardPage.getPageTitle();
  if (!title?.includes(pageTitle)) {
    throw new Error(`Expected page "${pageTitle}", but got "${title}"`);
  }
  await browser.close();
});
