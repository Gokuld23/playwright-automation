# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> iframe
- Location: tests\example.spec.js:2:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//a[text()=\'MCP\']')

```

# Test source

```ts
  1 | import {test} from '@playwright/test'
  2 | test('iframe',async({page})=>{
  3 |     await page.goto("https://practice-automation.com/iframes/")
  4 |     const frame=page.frameLocator("#iframe-1")
> 5 |     await page.locator("//a[text()='MCP']").click()
    |                                             ^ Error: locator.click: Target page, context or browser has been closed
  6 |     await page.locator("//span[text()='installation']").click()
  7 | })
```