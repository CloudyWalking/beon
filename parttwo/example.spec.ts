import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('test user name');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('test user last name');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('7652111');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');







  // locator('[data-test="item-quantity"]')
});
