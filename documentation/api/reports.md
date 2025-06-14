# Available Reports

## V8 build-in reports (V8 data only):

### `v8`
- Features:
    - A Brand-New V8 Coverage Report User Interface
    - Support for Native Byte Statistics
    - Support processing big data with high performance
    - Coverage for Any Runtime Code
    - CSS Coverage Support
    - Better Support for Sourcemap Conversion
- Demos: [V8](https://cenfun.github.io/monocart-coverage-reports/v8) and [more](https://cenfun.github.io/monocart-coverage-reports/)

![](/v8.gif)

### `v8-json`
- Save `CoverageResults` to a json file (defaults to [`coverage-report.json`](https://cenfun.github.io/monocart-coverage-reports/v8-and-istanbul/coverage-report.json)).
- Shows native V8 code coverage with VSCode extension: [Monocart Coverage for VSCode](https://github.com/cenfun/monocart-coverage-vscode)

![](/mcv.gif)

## Istanbul build-in reports (both V8 and Istanbul data):

- `clover`
- `cobertura`
- `html`
    - [Istanbul html](https://cenfun.github.io/monocart-coverage-reports/istanbul/)
    - [V8 to Istanbul](https://cenfun.github.io/monocart-coverage-reports/v8-and-istanbul/istanbul)
- `html-spa`
- `json`
- `json-summary`
- `lcov`
- `lcovonly`
    - [V8 lcov.info](https://cenfun.github.io/monocart-coverage-reports/v8/lcov.info)
    - [Istanbul lcov.info](https://cenfun.github.io/monocart-coverage-reports/istanbul/lcov.info)
- `none`
- `teamcity`
- `text`
- `text-lcov`
- `text-summary`

## Other build-in reports (both V8 and Istanbul data):

### `codecov`
Save coverage data to a json file with [Codecov](https://docs.codecov.com/docs/codecov-custom-coverage-format) format (defaults to `codecov.json`), see [example](https://app.codecov.io/github/cenfun/monocart-coverage-reports).

### `codacy`
Save coverage data to a json file with [Codacy API](https://api.codacy.com/swagger#tocscoveragereport) format (defaults to `codacy.json`).

### `console-summary`
Shows coverage summary in the console.

![]/console-summary.png)

### `console-details`
Show coverage details in the console. Like `text`, but for V8. For Github actions, we can enforce color with env: `FORCE_COLOR: true`.

![](/console-details.png)

### `markdown-summary`
Save coverage summary to a markdown file (defaults to `coverage-summary.md`). For Github actions, we can show the markdown content to [a job summary](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary)

```sh
cat path-to/coverage-summary.md >> $GITHUB_STEP_SUMMARY
```

![](/markdown-summary.png)

### `markdown-details`
Save coverage details to a markdown file (defaults to `coverage-details.md`).
- Preview in [runs](https://github.com/cenfun/monocart-coverage-reports/actions/workflows/ci.yml)

### `raw`
Only keep all original data, which can be used for other reports input with `inputDir`. see [Merge Coverage Reports](/guide/merging-reports)

## Custom Reporter

```js
{
    reports: [
        [path.resolve('./test/custom-istanbul-reporter.js'), {
            type: 'istanbul',
            file: 'custom-istanbul-coverage.text'
        }],
        [path.resolve('./test/custom-v8-reporter.js'), {
            type: 'v8',
            outputFile: 'custom-v8-coverage.json'
        }],
        [path.resolve('./test/custom-v8-reporter.mjs'), {
            type: 'both'
        }]
    ]
}
```

### Istanbul custom reporter
> example: [./test/custom-istanbul-reporter.js](./test/custom-istanbul-reporter.js), see [istanbul built-in reporters' implementation](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib) for reference.

### V8 custom reporter
> example: [./test/custom-v8-reporter.js](./test/custom-v8-reporter.js)

## Multiple Reports

```js
const MCR = require('monocart-coverage-reports');
const coverageOptions = {
    outputDir: './coverage-reports',
    reports: [
        // build-in reports
        ['console-summary'],
        ['v8'],
        ['html', {
            subdir: 'istanbul'
        }],
        ['json', {
            file: 'my-json-file.json'
        }],
        'lcovonly',

        // custom reports
        // Specify reporter name with the NPM package
        ["custom-reporter-1"],
        ["custom-reporter-2", {
            type: "istanbul",
            key: "value"
        }],
        // Specify reporter name with local path
        ['/absolute/path/to/custom-reporter.js']
    ]
}
const mcr = MCR(coverageOptions);
```
