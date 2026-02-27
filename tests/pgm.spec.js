import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#name').fill("Rupali")
  await page.locator('#email').fill("suryawanshi.rupali15@gmail.com")
  await page.locator('#phone').fill("8983022988")
  await page.locator('#textarea').fill("Gat No. 58/3, , Solapur-Pune National Highway No. 9, Kegaon, Solapur, Maharashtra 413255")
  await page.locator('#female').check()
  //const days = page.locator("//label[normalize-space()='Days:']");
  const days = page.locator('input[type="checkbox"] + label');
  const allDays = await days.allTextContents();
  console.log(allDays)
  await page.locator('#tuesday').check()

  const countries = page.locator('#country option');
  const allcountries  = await countries.allTextContents();
  expect(allcountries.length).toBe(10);

  
  const cleanedCountries = allcountries.map(country => country.trim())
  console.log(cleanedCountries)

  
const colors = (await page.locator('#colors option').allInnerTexts()).map(a => a.trim());

expect(colors).toContain("Yellow");
const dropdownButton = page.locator('.dropbtn');

await dropdownButton.hover();
const mouse = page.locator('.dropdown-content').first().click()

//await expect(page.locator('.dropdown-content')).toBeVisible();

const doubleclick =page.locator('button[ondblclick="myFunction1()"]')
await doubleclick.dblclick();

const source = page.locator('#draggable p')
const dest = page.locator('#droppable')
await source.dragTo(dest)

const file = page.locator('#multipleFilesInput')
//await file.setInputFiles('E:\\Rupali_Playwright\\tests\\Chapter 3.docx');
//await file.setInputFiles('E:\\Rupali_Playwright\\tests\\Chapter 3.docx','E:\\Rupali_Playwright\\tests\\Chapter 4.docx');
await file.setInputFiles([
  'E:/Rupali_Playwright/tests/Chapter 3.docx',
  'E:/Rupali_Playwright/tests/Chapter 4.docx'
]);

/*page.on('dialog', async dialog =>{
expect(dialog.type()).toContain(('alert'))
expect(dialog.message()).toContain(('I am an alert box!'))
await dialog.accept();

})

await page.click("#alertBtn")
await page.waitForTimeout(5000);*/

//======================Confirm================================

/*page.on('dialog', async dialog =>{
expect(dialog.type()).toContain(('confirm'))
expect(dialog.message()).toContain(('Press a button!'))
await dialog.accept();

})

await page.click("#confirmBtn")
await expect(page.locator('#demo')).toHaveText('You pressed OK!')
await page.waitForTimeout(5000);
*/

//======================Prompt Alert============================

page.on('dialog', async dialog =>{
expect(dialog.type()).toContain(('prompt'))
expect(dialog.message()).toContain(('Please enter your name:'))
expect(dialog.defaultValue()).toContain('Harry Potter')
await dialog.accept();

})

await page.click('#promptBtn')
await expect(page.locator('#demo')).toHaveText('Hello Harry Potter! How are you today?')
await page.waitForTimeout(5000);






});