
import { test } from '@playwright/test';

test('iframe', async ({ page }) => {

    await page.goto("https://practice-automation.com/iframes/");

    const frame = page.frameLocator("#iframe-1");

    await frame.locator("//a[text()='MCP']").click();

    await frame.locator('//span[text()="Installation"]').click();

});
