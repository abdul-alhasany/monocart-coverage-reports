# V8 Coverage Data

## Collecting V8 Coverage Data

- Before coverage collection: Enabling `sourcemap` for source code
    - [webpack](https://webpack.js.org/configuration/): `devtool: source-map` and `mode: development`, example [webpack.config-v8.js](./test/build/webpack.config-v8.js)
    - [rollup](https://rollupjs.org/configuration-options/): `sourcemap: true` and `treeshake: false`
    - [esbuild](https://esbuild.github.io/api/): `sourcemap: true`, `treeShaking: false` and `minify: false`
    - [vite](https://vitejs.dev/config/build-options.html): `sourcemap: true` and `minify: false`

- Browser (Chromium-based Only)
    - [Collecting V8 Coverage Data with Playwright](#collecting-v8-coverage-data-with-playwright)
    - [Collecting Raw V8 Coverage Data with Puppeteer](#collecting-raw-v8-coverage-data-with-puppeteer)

- Node.js
    - [Collecting V8 Coverage Data from Node.js](#collecting-v8-coverage-data-from-nodejs)

- CDP
    - [Collecting V8 Coverage Data with CDP Client API](/guide/cdp-client)

## Collecting V8 Coverage Data with Playwright

```js
await Promise.all([
    page.coverage.startJSCoverage({
        // reportAnonymousScripts: true,
        resetOnNavigation: false
    }),
    page.coverage.startCSSCoverage({
        // Note, anonymous styles (without sourceURLs) are not supported, alternatively, you can use CDPClient
        resetOnNavigation: false
    })
]);

await page.goto("your page url");

const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage()
]);

const coverageData = [... jsCoverage, ... cssCoverage];

```
Collect coverage with `@playwright/test` [`Automatic fixtures`](https://playwright.dev/docs/test-fixtures#automatic-fixtures), see example: [fixtures.ts](https://github.com/cenfun/playwright-coverage/blob/main/fixtures.ts)
For more examples, see [./test/test-v8.js](./test/test-v8.js), [css](./test/test-css.js)

## Collecting Raw V8 Coverage Data with Puppeteer

```js
await Promise.all([
    page.coverage.startJSCoverage({
        // reportAnonymousScripts: true,
        resetOnNavigation: false,
        // provide raw v8 coverage data
        includeRawScriptCoverage: true
    }),
    page.coverage.startCSSCoverage({
        resetOnNavigation: false
    })
]);

await page.goto("your page url");

const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage()
]);

// to raw V8 script coverage
const coverageData = [... jsCoverage.map((it) => {
    return {
        source: it.text,
        ... it.rawScriptCoverage
    };
}), ... cssCoverage];
```
Example: [./test/test-puppeteer.js](./test/test-puppeteer.js)

## Collecting V8 Coverage Data from Node.js

Possible solutions:
- [NODE_V8_COVERAGE](https://nodejs.org/docs/latest/api/cli.html#node_v8_coveragedir)=`dir`
    - Sets Node.js env `NODE_V8_COVERAGE`=`dir` before the program running, the coverage data will be saved to the `dir` after the program exits gracefully.
    - Read the JSON file(s) from the `dir` and generate coverage report.
    - Example:
    > cross-env NODE_V8_COVERAGE=`.temp/v8-coverage-env` node [./test/test-node-env.js](./test/test-node-env.js) && node [./test/generate-report.js](./test/generate-report.js)

- [V8](https://nodejs.org/docs/latest/api/v8.html#v8takecoverage) API + NODE_V8_COVERAGE
    - Writing the coverage started by NODE_V8_COVERAGE to disk on demand with `v8.takeCoverage()`, it does not require waiting until the program exits gracefully.
    - Example:
    > cross-env NODE_V8_COVERAGE=`.temp/v8-coverage-api` node [./test/test-node-api.js](./test/test-node-api.js)

- [Inspector](https://nodejs.org/docs/latest/api/inspector.html) API
   - Connecting to the V8 inspector and enable V8 coverage.
   - Taking coverage data and adding it to the report.
   - Example:
   > node [./test/test-node-ins.js](./test/test-node-ins.js)
   - vm Example (scriptOffset):
   > node [./test/test-node-vm.js](./test/test-node-vm.js)

- [CDP](https://chromedevtools.github.io/devtools-protocol/) API
    - Enabling [Node Debugging](https://nodejs.org/en/guides/debugging-getting-started/).
    - Collecting coverage data with CDP API.
    - Example:
    > node --inspect=9229 [./test/test-node-cdp.js](./test/test-node-cdp.js)

- [Node Debugging](https://nodejs.org/en/guides/debugging-getting-started) + CDP + NODE_V8_COVERAGE + V8 API
    - When the program starts a server, it will not exit on its own, thus requiring a manual invocation of the `v8.takeCoverage()` interface to manually collect coverage data. Remote invocation of the `v8.takeCoverage()` interface can be accomplished through the `Runtime.evaluate` of the CDP.
    - Example for [koa](https://github.com/koajs/koa) web server:
    > node [./test/test-node-koa.js](./test/test-node-koa.js)

- [Child Process](https://nodejs.org/docs/latest/api/child_process.html) + NODE_V8_COVERAGE
    - see [Command Line](/guide/command-line)

## V8 Coverage Data API

- [JavaScript code coverage in V8](https://v8.dev/blog/javascript-code-coverage)
- [Playwright Coverage Class](https://playwright.dev/docs/api/class-coverage)
- [Puppeteer Coverage Class](https://pptr.dev/api/puppeteer.coverage)
- [DevTools Protocol for Coverage](https://chromedevtools.github.io/devtools-protocol/tot/Profiler/#method-startPreciseCoverage) see [ScriptCoverage](https://chromedevtools.github.io/devtools-protocol/tot/Profiler/#type-ScriptCoverage) and [v8-coverage](https://github.com/bcoe/v8-coverage)

```js
// Coverage data for a source range.
export interface CoverageRange {
    // JavaScript script source offset for the range start.
    startOffset: integer;
    // JavaScript script source offset for the range end.
    endOffset: integer;
    // Collected execution count of the source range.
    count: integer;
}
// Coverage data for a JavaScript function.
/**
 * @functionName can be an empty string.
 * @ranges is always non-empty. The first range is called the "root range".
 * @isBlockCoverage indicates if the function has block coverage information.
    If this is false, it usually means that the functions was never called.
    It seems to be equivalent to ranges.length === 1 && ranges[0].count === 0.
*/
export interface FunctionCoverage {
    // JavaScript function name.
    functionName: string;
    // Source ranges inside the function with coverage data.
    ranges: CoverageRange[];
    // Whether coverage data for this function has block granularity.
    isBlockCoverage: boolean;
}
// Coverage data for a JavaScript script.
export interface ScriptCoverage {
    // JavaScript script id.
    scriptId: Runtime.ScriptId;
    // JavaScript script name or url.
    url: string;
    // Functions contained in the script that has coverage data.
    functions: FunctionCoverage[];
}
export type V8CoverageData = ScriptCoverage[];
```

## Runtime Support

| JavaScript Runtime | V8 Coverage |                                                        |
| :----------------- | :---------: | :----------------------------------------------------- |
| Chrome (65%)       |      ✅      | Chromium-based                                         |
| Safari (18%)       |      ❌      |                                                        |
| Edge (5%)          |      ✅      | Chromium-based                                         |
| Firefox (2%)       |      ❌      |                                                        |
| Node.js            |      ✅      |                                                        |
| Deno               |      ❌      | [issue](https://github.com/denoland/deno/issues/23359) |
| Bun                |      ❌      |                                                        |
