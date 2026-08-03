import {Locator, Page, expect} from "@playwright/test";
import {faker} from "@faker-js/faker";
//import Logger from '../utils/logger.util';

export class ParaBankSignupPage {
    page: Page;
    firstNameInput: Locator;
    lastNameInput: Locator;
    streetInput: Locator;
    cityInput: Locator;
    stateInput: Locator;
    zipCodeInput: Locator;
    phoneNumberInput: Locator;
    ssnInput: Locator;
    usernameInput: Locator;
    passwordInput: Locator;
    repeatedPasswordInput: Locator;
    registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[id="customer.firstName"]');
        this.lastNameInput = page.locator('[id="customer.lastName"]');
        this.streetInput = page.locator('[id="customer.address.street"]');
        this.cityInput = page.locator('[id="customer.address.city"]');
        this.stateInput = page.locator('[id="customer.address.state"]');
        this.zipCodeInput = page.locator('[id="customer.address.zipCode"]');
        this.phoneNumberInput = page.locator('[id="customer.phoneNumber"]');
        this.ssnInput = page.locator('[id="customer.ssn"]');
        this.usernameInput = page.locator('[id="customer.username"]');
        this.passwordInput = page.locator('[id="customer.password"]');
        this.repeatedPasswordInput = page.locator('#repeatedPassword');
        this.registerButton = page.getByRole('button', { name: 'Register' });


    }

    async goTo(){
        await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');

    }

    async fillForm(){
        await this.firstNameInput.fill(faker.person.firstName());
        await this.lastNameInput.fill(faker.person.lastName());
        await this.streetInput.fill(faker.location.streetAddress());
        await this.cityInput.fill(faker.location.city());
        await this.stateInput.fill(faker.location.state());
        await this.zipCodeInput.fill(faker.location.zipCode());
        await this.phoneNumberInput.fill(faker.phone.number());
        await this.ssnInput.fill(faker.string.numeric(9));
        
    }

    async fillCredentials(password: string, username: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.repeatedPasswordInput.fill(password);
    }

    async submitForm(){
        await this.registerButton.click();
    }







}

// await page.goto('https://parabank.parasoft.com/parabank/register.htm');
// await page.locator('[id="customer.firstName"]').click();
// await page.locator('[id="customer.firstName"]').fill('Njabulo');
// await page.locator('[id="customer.firstName"]').press('Tab');
// await page.locator('[id="customer.lastName"]').click();
// await page.locator('[id="customer.lastName"]').fill('Zondo');
// await page.locator('[id="customer.address.street"]').click();
// await page.locator('[id="customer.address.street"]').fill('389B san ridge');
// await page.locator('[id="customer.address.city"]').click();
// await page.locator('[id="customer.address.city"]').fill('midrand');
// await page.locator('[id="customer.address.state"]').click();
// await page.locator('[id="customer.address.state"]').fill('noordwyk');
// await page.locator('[id="customer.address.zipCode"]').click();
// await page.locator('[id="customer.address.zipCode"]').fill('1687');
// await page.locator('[id="customer.phoneNumber"]').click();
// await page.locator('[id="customer.phoneNumber"]').fill('0713405723');
// await page.locator('[id="customer.ssn"]').click();
// await page.locator('[id="customer.ssn"]').fill('1432');
// await page.locator('[id="customer.username"]').click();
// await page.locator('[id="customer.username"]').fill('Njabulo');
// await page.locator('[id="customer.password"]').click();
// await page.locator('[id="customer.password"]').fill('Test@01');
// await page.locator('#repeatedPassword').click();
// await page.locator('#repeatedPassword').fill('Test@01');
// await page.getByRole('button', { name: 'Register' }).click();
// await expect(page.getByRole('heading', { name: 'Welcome Njabulo' })).toBeVisible();

    