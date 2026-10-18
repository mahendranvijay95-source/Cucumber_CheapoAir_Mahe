import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from "playwright";
import { AdactinLogin } from '../pages/adactinlogin';

let page: Page;
let browser: Browser;
let adactinLogin: AdactinLogin;


Given('Open Adactin login page', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    adactinLogin = new AdactinLogin(page);
    await adactinLogin.gotoAdactin();
});


When('Enter credentials', async function (dataTable) {
    const cred = dataTable.rowsHash();
   // const cred1 = dataTable.hashes()[0];
    await adactinLogin.userName.fill(cred.userName);
    await adactinLogin.password.fill(cred.password);
    await adactinLogin.login.click();
    console.log("My Change to validated git conflict");
    console.log("Team Change to validate git conflict");
});



Then('User should be logged in successfully', async function () {
    const title = await page.title();
    console.log(title);
});




