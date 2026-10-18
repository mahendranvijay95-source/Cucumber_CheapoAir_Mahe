import { chromium } from "playwright";

(async () => {
    const browser = await chromium.launch({ headless: false, channel: "chrome" });
    const context = await browser.newContext();
    const page = await context.newPage();
  await page.goto('https://www.cheapoair.com/');
  await page.getByRole('button', { name: 'Close this dialog' }).click();
  await page.locator('.otp-mobile-bar-close').click();
  await page.getByRole('tablist', { name: 'Search Widget Tabs' }).getByText('Flights', { exact: true }).click();
  await page.getByRole('button', { name: 'Round-trip' }).click();
  await page.getByRole('listbox', { name: 'Round-trip' }).getByText('Round-trip').click();
  //await page.getByRole('button', { name: 'Traveler' }).click();
//   await page.getByRole('button', { name: 'Added 1 ADULTS' }).click({
//     clickCount: 3
//   });
//   await page.getByRole('button', { name: 'Added 1 ADULTS' }).click();
//   await page.getByRole('button', { name: 'Add SENIORS' }).click({
//     clickCount: 4
//   });
  await page.getByRole('button', { name: 'Travelers' }).click();
  await page.getByPlaceholder('Where from?').click();
  await page.getByPlaceholder('Where from?').fill('MAA');
  await page.getByPlaceholder('Where to?').fill('Del');
  await page.getByRole('button', { name: 'Depart' }).click();
  await page.getByRole('button', { name: '10 October' }).click();
  await page.getByRole('button', { name: '15 October' }).click();
  await page.locator('#closeCalendar').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Search' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.cheapoair.com/air/listing?&d1=MAA&r1=DEL&dt1=10/10/2026&dtype1=A&rtype1=A&d2=DEL&r2=MAA&dt2=10/15/2026&dtype2=A&rtype2=A&tripType=ROUNDTRIP&cl=ECONOMY&ad=5&se=4&ch=0&infs=0&infl=0&source=air_listing');
  await page1.locator('#contractindex_0').getByRole('button', { name: 'Select' }).click();
  await page1.locator('#contractindex_0').getByRole('button', { name: 'Select' }).click();
  await page1.getByTestId('travelers[0].FirstName').click();
  await page1.getByTestId('travelers[0].FirstName').fill('Mahe');
  await page1.getByTestId('travelers[0].LastName').click();
  await page1.getByTestId('travelers[0].LastName').click();
  await page1.getByTestId('travelers[0].LastName').fill('Erusan');
  await page1.locator('select[name="travelers[0].Month"]').selectOption('06');
  await page1.locator('input[name="travelers[0].Day"]').click();
  await page1.locator('input[name="travelers[0].Day"]').fill('15');
  await page1.locator('input[name="travelers[0].Year"]').click();
  await page1.locator('input[name="travelers[0].Year"]').fill('1991');
  await page1.locator('label').filter({ hasText: 'Male' }).first().click();
  await page1.getByTestId('travelers[0].Gender').first().check();
  await page1.getByTestId('travelers[0].PassportDetails.IssueCountry').selectOption('IN');
  await page1.getByTestId('travelers[1].FirstName').click();
  await page1.getByTestId('travelers[1].FirstName').fill('Chitra');
  await page1.getByTestId('travelers[1].FirstName').press('Tab');
  await page1.getByTestId('travelers[1].MiddleName').press('Tab');
  await page1.getByTestId('travelers[1].LastName').click();
  await page1.getByTestId('travelers[1].LastName').fill('Mahe');
  await page1.locator('select[name="travelers[1].Month"]').selectOption('04');
  await page1.locator('input[name="travelers[1].Day"]').click();
  await page1.locator('input[name="travelers[1].Day"]').fill('14');
  await page1.locator('input[name="travelers[1].Year"]').click();
  await page1.locator('input[name="travelers[1].Year"]').fill('1991');
  await page1.locator('label').filter({ hasText: 'Female' }).nth(1).click();
  await page1.locator('[id="travelers[1].Gender.Female"]').check();
  await page1.getByTestId('travelers[1].PassportDetails.IssueCountry').selectOption('IN');
  await page1.getByTestId('travelers[2].FirstName').click();
  await page1.getByTestId('travelers[2].FirstName').fill('Hrithvik');
  await page1.getByTestId('travelers[2].LastName').click();
  await page1.getByTestId('travelers[2].LastName').fill('Mahe');
  await page1.locator('select[name="travelers[2].Month"]').selectOption('12');
  await page1.locator('input[name="travelers[2].Day"]').click();
  await page1.locator('input[name="travelers[2].Day"]').fill('10');
  await page1.locator('input[name="travelers[2].Year"]').click();
  await page1.locator('input[name="travelers[2].Year"]').fill('1991');
  await page1.locator('label').filter({ hasText: 'Male' }).nth(4).click();
  await page1.getByTestId('travelers[2].Gender').first().check();
  await page1.getByTestId('travelers[2].PassportDetails.IssueCountry').selectOption('IN');
  await page1.getByTestId('travelers[3].FirstName').click();
  await page1.getByTestId('travelers[3].FirstName').fill('Erusan');
  await page1.getByTestId('travelers[3].LastName').click();
  await page1.getByTestId('travelers[3].LastName').fill('Pad');
  await page1.locator('select[name="travelers[3].Month"]').selectOption('05');
  await page1.locator('input[name="travelers[3].Day"]').click();
  await page1.locator('input[name="travelers[3].Day"]').fill('15');
  await page1.locator('input[name="travelers[3].Year"]').click();
  await page1.locator('input[name="travelers[3].Year"]').fill('1990');
  await page1.locator('label').filter({ hasText: /^Male$/ }).nth(3).click();
  await page1.getByTestId('travelers[3].Gender').first().check();
  await page1.getByTestId('travelers[3].PassportDetails.IssueCountry').selectOption('IN');
  await page1.getByTestId('travelers[4].FirstName').click();
  await page1.getByTestId('travelers[4].FirstName').fill('Vijaya');
  await page1.getByTestId('travelers[4].LastName').click({
    modifiers: ['Shift']
  });

})();
