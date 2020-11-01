const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SigninPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () { return $('h1.ui.header') }
    get emailField () { return $('input#email') }
    get passwordField () { return $('input#password') }
    get submitBtn () { return $('button[type="submit"]') }

    get myAccountMenuItem () { return $('//a[text()="My Account"]') }
    get signOutMenuItem () { return $('//a[text()="Sign out"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using email and password
     */
    signin (email, password) {
        this.title.waitForDisplayed();
        this.emailField.setValue(email);
        this.passwordField.setValue(password);
        this.submitBtn.click(); 
        this.myAccountMenuItem.waitForDisplayed();
        this.signOutMenuItem.waitForDisplayed();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new SigninPage();
