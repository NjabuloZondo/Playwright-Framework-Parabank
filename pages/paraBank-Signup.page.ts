import {Locator, Page, expect} from "@playwright/test";
import {faker} from "@faker-js/faker";
import path from "path";
//import Logger from '../utils/logger.util';
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

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
    userAlreadyExistsError: Locator;


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
        this.userAlreadyExistsError = page.locator("#customer.username.errors");


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

    async AccountCreation(){
        await this.firstNameInput.fill('Nqubeko');
        await this.lastNameInput.fill('Zondo');
        await this.streetInput.fill('7825 midrand');
        await this.cityInput.fill('madrad');
        await this.stateInput.fill('noordwyk');
        await this.zipCodeInput.fill('1687');
        await this.phoneNumberInput.fill('0812565178');
        await this.ssnInput.fill('231');
        await this.usernameInput.fill('Thuba');
        await this.passwordInput.fill('Test@01');
        await this.repeatedPasswordInput.fill('Test@01');
        await this.registerButton.click();
        await expect(this.page.getByRole('heading', { name: 'Welcome Thuba' })).toBeVisible();
    }

    



    async fillCredentials(password: string, username: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.repeatedPasswordInput.fill(password);
    }

    async submitForm(){
        await this.registerButton.click();
    }

    async isErrorVisible(){
        await expect(this.userAlreadyExistsError).toBeVisible();
        //await expect(this.userAlreadyExistsError).toHaveText('This username already exists.');
    }

    async verifyAccountCreation(username: string){
        const headerText = await this.page.locator('h1').textContent();
        const rightPanelText = await this.page.locator('#rightPanel').textContent();

        if (headerText && rightPanelText) {
            await expect(headerText.includes(`Welcome ${username}`)).toBe(true);
            await expect(rightPanelText.includes(`Your account was created successfully. You are now logged in as ${username}.`)).toBe(true);
        }
        
    }




}



    