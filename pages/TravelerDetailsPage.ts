import { Page } from "@playwright/test";

export class TravelerDetailsPage {
  constructor(private page: Page) {}

  async fillTraveler(traveler: {
  firstName: string;
  lastName: string;
  dob: { day: string; month: string; year: string };
  gender: string;
  country: string;
  email?: string;
}, index: number) {
  await this.page.waitForSelector('text=Who\'s Traveling?', { timeout: 60000 });

  if (traveler.email && index === 0) {
    await this.page.locator(`input[name="travelers[${index}].Email"]`).fill(traveler.email);
  }

  await this.page.locator(`input[name="travelers[${index}].FirstName"]`).fill(traveler.firstName);
  await this.page.locator(`input[name="travelers[${index}].LastName"]`).fill(traveler.lastName);

  await this.page.locator(`select[name="travelers[${index}].Month"]`).selectOption(traveler.dob.month);
  await this.page.locator(`input[name="travelers[${index}].Day"]`).fill(traveler.dob.day);
  await this.page.locator(`input[name="travelers[${index}].Year"]`).fill(traveler.dob.year);

  //await this.page.locator(`input[name="travelers[${index}].Gender"][value="${traveler.gender}"]`).check();
//travelers[0].Gender.Female
//await this.page.locator(`travelers[${index}].${traveler.gender}`).check();
const genderValue = traveler.gender === "Male" ? "1" : "2";
await this.page.locator(`input[name="travelers[${index}].Gender"][value="${genderValue}"]`).click({force:true});

  await this.page.locator(`select[name="travelers[${index}].PassportDetails.IssueCountry"]`).selectOption(traveler.country);

  console.log(`Traveler ${index + 1} filled: ${traveler.firstName} ${traveler.lastName}`);
}


  async fillAllTravelers(travelers: any[]) {
    for (let i = 0; i < travelers.length; i++) {
      await this.fillTraveler(travelers[i], i);
    


    }
 }

  async proceedToPayment() {
    await this.page.getByRole('button', { name: /Go to Payment/i }).click();
    //await this.page.pause();
  }
}
