import {Given, When, Then} from '@cucumber/cucumber';
         Given('Keyboard connected to desktop', async function () {
           console.log("keybard connected")
         });
       
  
       
         When('Press the key <Combkey1>', async function () {
          console.log("start pressing the key")
         });
       
  
       
         When('Press the key <Combkey2>', async function (dataTable) {
         const data =  dataTable.rowsHash();
         console.log(data);
         });
       
