import {test} from '@playwright/test'
test('launch amazon', async ({page}) => {
    await page.goto('https://www.amazon.in/');
        const title1 = await page.title();
        console.log(await page.url());
        console.log(title1);        
        console.log("newline01");
        console.log("newlineadded in branch-develop");
})