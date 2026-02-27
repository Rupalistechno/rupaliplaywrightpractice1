import { test, expect,chromium } from '@playwright/test'
test('Multiple window ' , async ()=>{

      const browser =  await chromium.launch();
      const context = await browser.newContext();

      const page1 = await context.newPage();
      const page2 = await context.newPage();

      const allPages = context.pages()
      console.log('No. of pages ',allPages.length);

    await page1.goto('https://www.google.com/')
    expect(page1).toHaveTitle('Google')
    await page2.goto('https://www.demoblaze.com/')
    expect(page2).toHaveTitle('STORE')
    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);
})
test.only('Multiple window' , async() => {

      const browser =  await chromium.launch();
      const context = await browser.newContext();

      const page1 = await context.newPage();
      await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

      const pagePromise = context.waitForEvent('page')
   
      await page1.locator('text=OrangeHRM, Inc').click()
      const newPage = await pagePromise;

    await newPage.waitForLoadState();
      expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")

     
     
     await page1.waitForTimeout(5000);
     



});