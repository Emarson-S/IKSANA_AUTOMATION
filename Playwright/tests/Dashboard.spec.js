const {test, expect} =require('@playwright/test');

test('Dashboard', async({page})=> {

await page.goto('https://awsdev.iksana.life/#/en/login');

await page.fill("input[name='username']",'Joseph@yopmail.com');
    
await page.fill("input[placeholder='Enter password']", 'Iksana@123');
    
await page.click("//button[text()='Sign in']");

})