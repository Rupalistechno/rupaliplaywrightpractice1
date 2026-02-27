import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage.js';
import{HomePage} from '../Pages/HomePage.js';
//import { HomePage } from './pages/HomePage';
test('test',async({page})=>
{
    //Login
    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');
    await page.waitForTimeout(5000);
    //Home
   const home=new HomePage(page);
   await home.addProductToCart();
   await page.waitForTimeout(5000);

    //Cart

});