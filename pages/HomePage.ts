import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async closePopups() {
    try {
      const dialogButton = this.page.getByRole('button', { name: 'Close this dialog' });
      if (await dialogButton.isVisible()) {
        await dialogButton.click();
      }
    } catch (err) {
      console.log("Dialog popup not found, skipping.");
    }

    try {
      const otpClose = this.page.locator('.otp-mobile-bar-close');
      if (await otpClose.isVisible()) {
        await otpClose.click();
      }
    } catch (err) {
      console.log("OTP mobile bar not found, skipping.");
    }
  }

  async selectFlightsTab() {
    await this.page.getByRole('tablist', { name: 'Search Widget Tabs' })
      .getByText('Flights', { exact: true }).click();
  }

  async chooseRoundTrip() {
    await this.page.getByRole('button', { name: 'Round-trip' }).click();
    await this.page.getByRole('listbox', { name: 'Round-trip' })
      .getByText('Round-trip').click();
  }

 async addTravelers(adults: number, seniors: number) {
  await this.page.getByRole('button', { name: 'Traveler' }).click();

  const adultAddButton = this.page.locator('#addADULTS');
  for (let i = 0; i < adults; i++) {
    await adultAddButton.click();
  }

  const seniorAddButton = this.page.locator('#addSENIORS');
  for (let i = 0; i < seniors; i++) {
    await seniorAddButton.click();
  }

  await this.page.getByRole('button', { name: 'Travelers' }).click();
}


  async enterRoute(from: string, to: string) {
    await this.page.getByPlaceholder('Where from?').fill(from);
    await this.page.getByPlaceholder('Where to?').fill(to);
  }
async selectDates(depart: string, ret: string) {
  await this.page.locator('#fs_departDate_0').click();

  await this.page.getByRole('button', { name: depart }).click();

  await this.page.getByRole('button', { name: ret }).click();

  const closeBtn = this.page.locator('#closeCalendar');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
}



  async searchFlights() {
    await this.page.getByRole('button', { name: 'Search' }).click();
  }
}
