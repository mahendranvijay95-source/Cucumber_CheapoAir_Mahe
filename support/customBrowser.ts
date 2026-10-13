import { setWorldConstructor,World } from "@cucumber/cucumber";
import {Page, Browser} from '@playwright/test';

export class CustomBrowser extends World{
    browser !: Browser;
    page !: Page;
    
}
setWorldConstructor(CustomBrowser);