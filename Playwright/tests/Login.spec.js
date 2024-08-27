const {test, expect} =require('@playwright/test');

test.skip('Login Success',async({page})=>{

await page.goto('https://awsdev.iksana.life/#/en/login');

try {

await page.fill("input[name='username']",'prakash.dhanapalan@mavens-i.com');

await page.fill("input[placeholder='Enter password']", 'Welldercare@1');

await page.click("//button[text()='Sign in']");

const text=await page.locator("//h4[@class='page-title']").textContent();

await expect(await page.getByText(text)).toBeVisible();

console.log(text);

} catch (error) {
    console.log('Fail');
}

});


test.skip('Test3',async({page})=>{

    await page.goto('https://awsdev.iksana.life/#/en/login');
    
    try {
    
    await page.fill("input[name='username']",' ');
    
    await page.fill("input[placeholder='Enter password']", ' ');
    
    await page.click("//button[text()='Sign in']");
    
    
    
    await expect(await page.getByText(text)).toBeVisible();
    
    } catch (error) {
        console.log('Fail');
    }
    
    })





test('Login Validations',async({page})=>{

    await page.goto('https://awsdev.iksana.life/#/en/login');

    // Enter empty username and empty password
    
    await page.fill("input[name='username']",'');
    
    await page.fill("input[placeholder='Enter password']", '');
    
    await page.click("//button[text()='Sign in']");

    const errorMeg1 = await page.locator("//div[@class='ng-star-inserted']").first().textContent();

    console.log(errorMeg1);

    const errorMeg2 = await page.locator("//div[@class='ng-star-inserted']").nth(1).textContent();


// Enter empty username and valid password
    
    await page.fill("input[name='username']",'');
    
    await page.fill("input[placeholder='Enter password']", 'Welldercare@1');
    
    await page.click("//button[text()='Sign in']");

    const errorMeg3 = await page.locator("(//div[@class='ng-star-inserted'])[1]").textContent();

    await expect(await page.getByText(errorMeg3)).toBeVisible();

    console.log('Pass');


    // Enter valid username and empty password

    await page.fill("input[name='username']",'prakash.dhanapalan@mavens-i.com');
    
    await page.fill("input[placeholder='Enter password']", '');
    
    await page.click("//button[text()='Sign in']");

    const errorMeg4 = await page.locator("(//div[@class='ng-star-inserted'])[1]").textContent();

    await expect(await page.getByText(errorMeg4)).toBeVisible();

    console.log('Pass');

    // Enter valid username and invalid password

    await page.fill("input[name='username']",'prakash.dhanapalan@mavens-i.com');
    
    await page.fill("input[placeholder='Enter password']", 'test');

    await page.click("//button[text()='Sign in']");

    const notify1=await page.locator("//p[@class='notifier__notification-message ng-star-inserted']").textContent();
    
    await expect(await page.getByText(notify1)).toBeVisible();

    console.log('Pass');

    // Enter invalid username and valid password

    await page.fill("input[name='username']",'prakash.dhanapalan@vens-i.com');
    
    await page.fill("input[placeholder='Enter password']", 'Welldercare@1');

    await page.click("//button[text()='Sign in']");

    const notify2=await page.locator("//p[@class='notifier__notification-message ng-star-inserted']").textContent();
    
    await expect(await page.getByText(notify2)).toBeVisible();

    console.log('Pass');

    // Enter invalid username and invalid password

    await page.fill("input[name='username']",'prakash.dhanapalan@vens-i.com');
    
    await page.fill("input[placeholder='Enter password']", 'Welldcare@1');

    await page.click("//button[text()='Sign in']");

    const notify3=await page.locator("//p[@class='notifier__notification-message ng-star-inserted']").textContent();
    
    await expect(await page.getByText(notify3)).toBeVisible();

    console.log('Pass');

    });



