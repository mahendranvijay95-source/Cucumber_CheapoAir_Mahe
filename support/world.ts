import { setWorldConstructor } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { TravelerDetailsPage } from "../pages/TravelerDetailsPage";

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  homePage!: HomePage;
  resultsPage!: SearchResultsPage;
  travelerPage!: TravelerDetailsPage;

  async init() {
    this.browser = await chromium.launch({ headless: false, channel: "chrome" });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.homePage = new HomePage(this.page);
    this.resultsPage = new SearchResultsPage(this.page, this.context);

    this.travelerPage = new TravelerDetailsPage(this.page);
  }

  async cleanup() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
