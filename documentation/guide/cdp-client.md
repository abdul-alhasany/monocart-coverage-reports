# CDP Client API

## Available APIs

- `CDPClient` available APIs
```js
startJSCoverage: () => Promise<void>;
stopJSCoverage: () => Promise<V8CoverageEntry[]>;

startCSSCoverage: () => Promise<void>;
stopCSSCoverage: () => Promise<V8CoverageEntry[]>;

/** start both js and css coverage */
startCoverage: () => Promise<void>;
/** stop and return both js and css coverage */
stopCoverage: () => Promise<V8CoverageEntry[]>;

/** write the coverage started by NODE_V8_COVERAGE to disk on demand, returns v8 coverage dir */
writeCoverage: () => Promise<string>;

/** get istanbul coverage data */
getIstanbulCoverage: (coverageKey?: string) => Promise<any>;
```

## Working with Node Debugger

Work with node debugger port `--inspect=9229` or browser debugging port `--remote-debugging-port=9229`
```js
const MCR = require('monocart-coverage-reports');
const client = await MCR.CDPClient({
    port: 9229
});
await client.startJSCoverage();
// run your test here
const coverageData = await client.stopJSCoverage();
```

## Working with Playwright CDPSession

Work with [Playwright CDPSession](https://playwright.dev/docs/api/class-cdpsession)
```js
const { chromium } = require('playwright');
const MCR = require('monocart-coverage-reports');
const browser = await chromium.launch();
const page = await browser.newPage();
const session = await page.context().newCDPSession(page);
const client = await MCR.CDPClient({
    session
});
// both js and css coverage
await client.startCoverage();
// run your test page here
await page.goto("your page url");
const coverageData = await client.stopCoverage();
```

## Working with Puppeteer CDPSession

Work with [Puppeteer CDPSession](https://pptr.dev/api/puppeteer.cdpsession)
```js
const puppeteer = require('puppeteer');
const MCR = require('monocart-coverage-reports');
const browser = await puppeteer.launch({});
const page = await browser.newPage();
const session = await page.target().createCDPSession();
const client = await MCR.CDPClient({
    session
});
// both js and css coverage
await client.startCoverage();
// run your test page here
await page.goto("your page url");
const coverageData = await client.stopCoverage();
```

## Working with Selenium Webdriver

Work with [Selenium Webdriver](https://www.selenium.dev/documentation/webdriver/) WebSocket (Chrome/Edge Browser)
```js
const { Builder, Browser } = require('selenium-webdriver');
const MCR = require('monocart-coverage-reports');
const driver = await new Builder().forBrowser(Browser.CHROME).build();
const pageCdpConnection = await driver.createCDPConnection('page');
const session = new MCR.WSSession(pageCdpConnection._wsConnection);
const client = await MCR.CDPClient({
    session
})
```
