import { Given, When, Then } from '@cucumber/cucumber';
Given('fan is connected', async function () {
    console.log("fan is connected");
});

When('Fan is rotating', async function () {
    console.log("fan is rotating");
});


When('Adjust the <speed2>', async function (dataTable) {
   // const testData  = dataTable.rowHash();
   // console.log(testData);

});

