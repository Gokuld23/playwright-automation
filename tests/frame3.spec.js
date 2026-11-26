import { test } from '@playwright/test';

test('iframe', async ({ page }) => {
     const frame1 = page.frameLocator("#frm1");
     await frame1.locator()

});
