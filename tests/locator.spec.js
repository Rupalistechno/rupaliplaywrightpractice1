import { test, expect } from '@playwright/test';

test('Handle locators properly', async ({ page }) => {

    // 1️⃣ Open Website
    await page.goto('https://www.demoblaze.com/');

    // 2️⃣ Wait for products to load and click second product
    await page.locator("(//a[@class='hrefch'])[2]").waitFor({ state: 'visible' });
    await page.locator("(//a[@class='hrefch'])[2]").click();

    // 3️⃣ Go back to home page (because product page does not have next button)
    await page.goBack();

    // 4️⃣ Wait and click carousel next button
    const nextButton = page.locator('#next2');
    await expect(nextButton).toBeVisible();
    await nextButton.click();

    // 5️⃣ Example: Fill login modal email (if required)
    await page.locator('#login2').click();
    await page.locator("//input[@id='loginusername']").fill("test@example.com");

});