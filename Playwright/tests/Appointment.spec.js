const {test, expect} =require('@playwright/test');

test('Appointment', async({page})=> {

await page.goto('https://awsdev.iksana.life/#/en/login');

await page.fill("input[name='username']",'Joseph@yopmail.com');
    
await page.fill("input[placeholder='Enter password']", 'Iksana@123');
    
await page.click("//button[text()='Sign in']");

const session=page.isVisible("//button[text()='Continue']");

console.log(session);

if(session){
    await page.click("//button[text()='Continue']");
}

await page.waitForTimeout(6000);

const appMenu=page.locator("//a[@href='#/en/home/appointment/upcoming']");

await appMenu.scrollIntoViewIfNeeded();

await appMenu.click();

await page.click("//button[text()=' Create Appointment ']");

await page.fill("(//input[@aria-autocomplete='list'])[4]", 'Chris Watson');

await page.keyboard.press('Enter');

await page.fill("(//input[@aria-autocomplete='list'])[5]", 'OPD');

await page.keyboard.press('Enter');

await page.fill("(//input[@aria-autocomplete='list'])[6]", 'Online');

await page.keyboard.press('Enter');

const VarDate=new Date();

console.log(VarDate);

let formattedDate = `${VarDate.getDate().toString().padStart(2, '0')}-${(VarDate.getMonth() + 1).toString().padStart(2, '0')}-${VarDate.getFullYear()}`; // Convert to DD/MM/YYYY format
console.log(formattedDate);

let hour = `${VarDate.getHours().toString().padStart(2, '0')}}`;
console.log(hour);

let minutes =`${(VarDate.getMinutes()+5).toString().padStart(2, '0')}}`;
console.log(minutes);

await page.fill("(//input[@placeholder='DD-MM-YYYY'])[1]", formattedDate);

await page.click("(//input[@formcontrolname='time'])[1]");

await page.fill("//input[@placeholder='HH']", hour);

await page.fill("//input[@placeholder='MM']", minutes);

await page.keyboard.press('Enter');

await page.fill("(//input[@aria-autocomplete='list'])[7]", '45')

await page.keyboard.press('Enter');

await page.click("//button[text()='Book Appointment']");

await page.waitForTimeout(6000);

})