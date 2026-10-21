import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { LoginPage } from "../pages/orangeHRM_LoginPage";
import * as dotenv from "dotenv";

dotenv.config();

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given("I open the OrangeHRM login page", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);

  const url = process.env.ORANGEHRM_URL as string;
  await loginPage.goto(url);
});

When(
  "I enter username {string} and password {string}",
  async function (username: string, password: string) {
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
   
  }
);

When('I click on the Login button', async function () {
   await loginPage.clickLogin();
});

// When("I leave username and password fields empty", async function () {
//   await loginPage.enterUsername("");
//   await loginPage.enterPassword("");
//   await loginPage.clickLogin();
// });

Then("I should be redirected to the dashboard", async function () {
  const dashboardTitle = await page.locator("h6").textContent();
  if (!dashboardTitle?.includes("Dashboard")) {
    throw new Error("Login failed - Dashboard not found!");
  }
  console.log(`Sucessfully loged in ${dashboardTitle}`);
});

Then("I should see the welcome message", async function () {
  const welcomeText = await page.locator(".oxd-userdropdown-name").textContent();
  console.log("Welcome message:", welcomeText);
});

Then("I should see an error message {string}", async function (expectedMsg: string) {
  const errorMsg = await page.locator(".oxd-alert-content-text").textContent();
  if (!errorMsg?.includes(expectedMsg)) {
    throw new Error(`Expected error message "${expectedMsg}", but got "${errorMsg}"`);
  }
});

Then("I should see validation messages for required fields", async function () {
  const usernameValidation = await page.locator(".oxd-input-group .oxd-text").nth(0).textContent();
  const passwordValidation = await page.locator(".oxd-input-group .oxd-text").nth(1).textContent();

  console.log("Validation messages:", usernameValidation, passwordValidation);
});

Given("I am logged in with valid credentials", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);

  const url = process.env.ORANGEHRM_URL as string;
  await loginPage.goto(url);

  const username = process.env.ORANGEHRM_USERNAME as string;
  const password = process.env.ORANGEHRM_PASSWORD as string;

  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();
});

When("I click on the Logout option", async function () {
  await page.locator(".oxd-userdropdown-name").click();
  await page.locator("text=Logout").click();
});

Then("I should be redirected back to the login page", async function () {
  const loginTitle = await page.locator("h5").textContent();
  if (!loginTitle?.includes("Login")) {
    throw new Error("Logout failed - Login page not displayed!");
  }
  await browser.close();
});
