import { Page, BrowserContext } from "@playwright/test";

export class SearchResultsPage {
  constructor(private page: Page, private context: BrowserContext) {}

  async closePopupIfPresent(targetPage: Page) {
    try {
      const popupClose = targetPage.locator(".modal-close, .popup-close, .close");
      if (await popupClose.isVisible()) {
        await popupClose.click();
        console.log("Popup closed successfully");
      }
    } catch {
      console.log("No popup appeared, continuing...");
    }
  }

  async selectFirstFlight() {
    const [resultsPage] = await Promise.all([
      this.context.waitForEvent("page"),
      //this.page.waitForLoadState("domcontentloaded") // wait for search trigger
    ]);

    await resultsPage.waitForLoadState("domcontentloaded");

    await this.closePopupIfPresent(resultsPage);

    await resultsPage.waitForSelector("#contractindex_0", { timeout: 90000 });

    await resultsPage.locator("#contractindex_0").first().click();//1st time
    console.log("1st flight");
    await resultsPage.waitForSelector("text=Choose your returning flight", { timeout: 90000 });

  const returnCard = resultsPage.locator("#contractindex_0").first();
  await returnCard.scrollIntoViewIfNeeded();
  await returnCard.locator('button:has-text("Select")').click({ force: true });//2nd
    console.log("2nd flight");
     return resultsPage;
  }
}
