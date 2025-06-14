# Other Testing Frameworks

## [c8](https://github.com/bcoe/c8)
- c8 has integrated `MCR` as an experimental feature since [v10.1.0](https://github.com/bcoe/c8/releases/tag/v10.1.0)
```sh
c8 --experimental-monocart --reporter=v8 --reporter=console-details node foo.js
```

## [CodeceptJS](https://github.com/codeceptjs/CodeceptJS)
- CodeceptJS is a [BDD](https://codecept.io/bdd/) + [AI](https://codecept.io/ai/) testing framework for e2e testing, it has integrated `MCR` since [v3.5.15](https://github.com/codeceptjs/CodeceptJS/releases/tag/3.5.15), see [plugins/coverage](https://codecept.io/plugins/#coverage)

## [VSCode](https://github.com/microsoft/vscode)
- [Monocart Coverage for VSCode](https://github.com/cenfun/monocart-coverage-vscode) - Shows native V8 code coverage in VSCode

## [Node Test Runner](https://nodejs.org/docs/latest/api/test.html)
- [node-monocart-coverage](https://github.com/cenfun/node-monocart-coverage) - Custom reporter for Node test runner for coverage

## [WebdriverIO](https://github.com/webdriverio/webdriverio)
- [wdio-monocart-service](https://github.com/cenfun/wdio-monocart-service) - WebdriverIO service for coverage reports

## [Storybook Test Runner](https://github.com/storybookjs/test-runner)
- [storybook-monocart-coverage](https://github.com/cenfun/storybook-monocart-coverage) - Example for Storybook V8 coverage reports

## [TestCafe](https://github.com/DevExpress/testcafe)
- [testcafe-reporter-coverage](https://github.com/cenfun/testcafe-reporter-coverage) - TestCafe custom reporter for coverage reports

## [Selenium Webdriver](https://github.com/seleniumhq/selenium)
- [selenium-webdriver-coverage](https://github.com/cenfun/selenium-webdriver-coverage) - Example for Selenium Webdriver V8 coverage reports

## Command Line Examples

See [Command Line](/guide/command-line) for detailed CLI usage examples including:
- [Mocha](/guide/command-line#mocha)
- [TypeScript](/guide/command-line#typescript)
- [AVA](/guide/command-line#ava)
