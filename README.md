# Webdriverio v6 QualityCamp Sample Test Automation

### Installing Dependencies
`npm i`

### Folder Structure
- *test/data:* This contains test data to be used by test files. E.g. [urls, user data and headings that will be validated in a test]
- *test/pageObjects:* This contains page object files which include element selectors and functions that are reused in test files.
- *test/specs:* This contains test files which include the different tests and test suites.

### Run all tests
`npm test`

### Run a group [test suite] of tests
`npm run test -- --suite signin`

**N.B. The suite would have to exist in the config file before running this command**

```javascript
suites: {
        signin: [
            './test/specs/signin.test.js'
        ]
    }
```

### Run test by test file
`npm run test -- --spec ./test/specs/signin.test.js`

N.B. I have set the `maxInstances` to 1 because both tests are using the `setValue` command and when they run in parallel it throws this error repeatedly in the console. `ERROR : This is NOT allowed. Please call TIS/TSM in main thread!!!`

If you have any insight on how to fix this please reach out, it would be well appreciated.