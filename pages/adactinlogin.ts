import {Page} from 'playwright';
export class AdactinLogin{
    readonly page:Page;
    readonly userName;
    readonly password;
    readonly login;
    constructor (page:Page){
        this.page=page;
        this.userName= page.locator('#username');
        this.password = page.locator('#password');
        this.login = page.locator('#login');
          }
    async gotoAdactin(){
        await this.page.goto("https://adactinhotelapp.com/");
    }
}
