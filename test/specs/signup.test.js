//#region Required files
const SignupPage = require('../pageobjects/signup.page');
const heading = require('../data/heading.data');
const url = require('../data/url.data');
//#endregion

describe('Register', () => {
    it('Verfy that a user CAN register with a valid a valid name, email and password', () => {
        SignupPage.open();
        SignupPage.title.waitForDisplayed();
        expect(SignupPage.title).toHaveText(heading.signup);

        SignupPage.nameField.setValue(random.name());
        SignupPage.emailField.setValue(random.email());
        SignupPage.passwordField.setValue(random.string());
        SignupPage.submitBtn.click(); 

        SignupPage.myAccountMenuItem.waitForDisplayed();
        SignupPage.signOutMenuItem.waitForDisplayed();

        expect(browser).toHaveUrl(url.myaccount);
    });
});


