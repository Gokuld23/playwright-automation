# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> iframe
- Location: tests\example.spec.js:4:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#iframe-1').contentFrame().locator('//span[text()=\'installation\']')

```

# Test source

```ts
  1  | 
  2  | import { test } from '@playwright/test';
  3  | 
  4  | test('iframe', async ({ page }) => {
  5  | 
  6  |     await page.goto("https://practice-automation.com/iframes/");
  7  | 
  8  |     const frame = page.frameLocator("#iframe-1");
  9  | 
  10 |     await frame.locator("//a[text()='MCP']").click();
  11 | 
> 12 |     await frame.locator("//span[text()='installation']").click();
     |                                                          ^ Error: locator.click: Target page, context or browser has been closed
  13 | 
  14 | });
  15 | 
```