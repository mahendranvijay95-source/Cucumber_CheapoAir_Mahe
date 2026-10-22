import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { LoginPage } from "../pages/orangeHRM_LoginPage";
import { AdminPage } from "../pages/orangeHRM_AdminPage";
import * as dotenv from "dotenv";

dotenv.config();

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let adminPage: AdminPage;

Given("I am logged in with valid credentials", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  adminPage = new AdminPage(page);

  const url = process.env.ORANGEHRM_URL as string;
  await loginPage.goto(url);

  const username = process.env.ORANGEHRM_USERNAME as string;
  const password = process.env.ORANGEHRM_PASSWORD as string;

  await loginPage.enterUsername(username);
  await loginPage.enterPassword(password);
  await loginPage.clickLogin();
});

Given("I navigate to the Admin User Management page", async function () {
  await adminPage.gotoUserManagement();
});

When("I click on Add user", async function () {
  await adminPage.clickAddUser();
});

When(
  "I enter employee name {string}",
  async function (employeeName: string) {
    await adminPage.enterEmployeeName(employeeName);
  }
);

When("I enter username {string}", async function (username: string) {
  await adminPage.enterUsername(username);
});

When("I select role {string}", async function (role: string) {
  await adminPage.selectRole(role);
});

When("I select status {string}", async function (status: string) {
  await adminPage.selectStatus(status);
});

When("I enter password {string}", async function (password: string) {
  await adminPage.enterPassword(password);
});

When("I confirm password {string}", async function (password: string) {
  await adminPage.confirmPassword(password);
});

When("I save the user", async function () {
  await adminPage.saveUser();
});

Then("I should see the new user {string} in the user list", async function (username: string) {
  const exists = await adminPage.isUserInList(username);
  if (!exists) {
    throw new Error(`User "${username}" not found in list!`);
  }
});

When("I search for username {string}", async function (username: string) {
  await adminPage.searchUser(username);
});

Then("I should see the user {string} in the search results", async function (username: string) {
  const exists = await adminPage.isUserInList(username);
  if (!exists) {
    throw new Error(`User "${username}" not found in search results!`);
  }
});

When("I edit the user role to {string}", async function (newRole: string) {
  await adminPage.editUserRole(newRole);
});

When("I save the changes", async function () {
  await adminPage.saveUser();
});

Then("I should see the updated role {string} for user {string}", async function (newRole: string, username: string) {
  const role = await adminPage.getUserRole(username);
  if (role !== newRole) {
    throw new Error(`Expected role "${newRole}" but got "${role}"`);
  }
});

When("I delete the user {string}", async function (username: string) {
  await adminPage.deleteUser(username);
});

Then("I should not see the user {string} in the user list", async function (username: string) {
  const exists = await adminPage.isUserInList(username);
  if (exists) {
    throw new Error(`User "${username}" still present after deletion!`);
  }
  await browser.close();
});