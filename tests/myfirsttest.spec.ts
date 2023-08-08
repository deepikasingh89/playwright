import { test, expect } from "@playwright/test";
// import { hello, helloworld } from "./demo/hello";

// console.log(hello());
// console.log(helloworld());

test('My First Test',async ({page})=>{
   // await page.goto('https://google.com');
   // await expect(page).toHaveTitle('Google');
   await page.goto("https://www.saucedemo.com");
   await page.pause();
   //usinf any obj prop
   await page.click('id=user-name');
   await page.locator("id=user-name").fill("Deepika");
   await page.locator('[id="user-name"]').fill("Deepika");

   //using css selector
   await page.locator('#login-button').click();

   //using XPath
   await page.locator('xpath=//input[@name="password"]').fill('welcome');
   await page.locator('//input[@name="password"]').fill("welcome");
});