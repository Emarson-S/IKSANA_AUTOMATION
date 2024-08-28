const {test, expect} =require('@playwright/test');

test('Dashboard', async({page})=> {


await page.goto('https://awsdev.iksana.life/#/en/login');

await page.fill("input[name='username']",'jeevabalin.r@mavens-i.com');
    
await page.fill("input[placeholder='Enter password']", 'Emarson@123');
    
await page.click("//button[text()='Sign in']");

const text =await page.locator("(//small[@class='fs-10 mb-0 text-uppercase text-mute'])[1]").textContent();

await expect(await page.getByText(text)).toBeVisible();


})