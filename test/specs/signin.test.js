//#region Required files
const SigninPage = require('../pageobjects/signin.page');
const heading = require('../data/heading.data');
const user = require('../data/user.data');
const url = require('../data/url.data');
//#endregion

describe('User Login', () => {
    it('Verfy that a user with an active account CAN login with a valid email and password', () => {
        SigninPage.open();
        SigninPage.title.waitForDisplayed();
        expect(SigninPage.title).toHaveText(heading.signin);

        SigninPage.signin(user.existing.email, user.existing.password);
        expect(browser).toHaveUrl(url.myaccount);
    });
});


