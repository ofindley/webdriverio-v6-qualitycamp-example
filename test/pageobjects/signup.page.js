const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class signUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () { return $('h1.ui.header') }
    get nameField () { return $('input#name') }
    get emailField () { return $('input#email') }
    get passwordField () { return $('input#password') }
    get submitBtn () { return $('button[type="submit"]') }

    get myAccountMenuItem () { return $('//a[text()="My Account"]') }
    get signOutMenuItem () { return $('//a[text()="Sign out"]') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('register');
    }
}

module.exports = new signUpPage();
