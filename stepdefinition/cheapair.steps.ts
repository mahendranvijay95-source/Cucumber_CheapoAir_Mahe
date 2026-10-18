import { Given, When, Then } from "@cucumber/cucumber";
import travelers from "../data/travelers.json";
import {TravelerDetailsPage} from "../pages/TravelerDetailsPage";

Given('I open Cheapoair in Chrome', async function () {
  await this.page.goto('https://www.cheapoair.com/');
});

Given('I close initial popups', async function () {
  await this.homePage.closePopups();
});

Given('I select "Flights" tab', async function () {
  await this.homePage.selectFlightsTab();
});

Given('I choose "Round-trip"', async function () {
  await this.homePage.chooseRoundTrip();
});

Given('I add {int} adults and {int} seniors', async function (adults: number, seniors: number) {
  await this.homePage.addTravelers(adults, seniors);
});

Given('I enter departure as {string} and destination as {string}', async function (from: string, to: string) {
  await this.homePage.enterRoute(from, to);
});

Given('I select departure date {string} and return date {string}', async function (depart: string, ret: string) {
  await this.homePage.selectDates(depart, ret);
});

When('I search for flights', async function () {
  await this.homePage.searchFlights();
});

Then('I select the first available flight', async function () {
  const resultsPage = await this.resultsPage.selectFirstFlight();
  this.travelerPage = new TravelerDetailsPage(resultsPage);
});

Then('I fill traveler details', async function () {
//   const traveler = { firstName: "Mahe", lastName: "Erusan", dob: { day: "15", month: "06", year: "1991" }, gender: "Male", country: "IN" };
//   await this.travelerPage.fillTraveler(traveler, 0);
// });
 await this.travelerPage.fillAllTravelers(travelers);
});

Then('I proceed to payment', async function () {
  await this.travelerPage.proceedToPayment();
});
