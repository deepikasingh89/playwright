import { test, expect } from "@playwright/test";

test("record demo test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator("#shopping_cart_container a").click();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByRole("button", { name: "Close Menu" }).click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator(".inventory_item_description").first().click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page
    .locator('[data-test="product_sort_container"]')
    .selectOption("hilo");
  await page.locator("a").filter({ hasText: "2" }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="continue"]').click();
  await page.locator("a").filter({ hasText: "2" }).click();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByRole("link", { name: "All Items" }).click();
  await page.getByText("Swag Labs").click();
  await page.locator("a").filter({ hasText: "2" }).click();
});
