import{Given, When, Then} from "@cucumber/cucumber";


Given('fan is connected to power',async function () {
   console.log("Fan is connected to power")

});

When('Press the switch on',async function () {
   console.log("Fan is switched On")

});
Then('Fan start rotating',async function () {
   console.log("Fan is start rotating")

});

Given('Fan is running',async function () {
 console.log("Fan is rotating")
});
When('Adjust the speed to {string}',async function (five) {
console.log(five)
});


Then('Fan should rotates at maximum speed',async function () {
   console.log("Fan is rotating a maximum speed")

});


