---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Monocart Coverage Reports"
  text: "JavaScript Code Coverage Tool"
  tagline: Generate native V8 reports or Istanbul reports with ease
  image:
    src: /logo.jpg
    alt: Monocart Coverage Reports
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/cenfun/monocart-coverage-reports

features:
  - title: V8 Native Coverage
    details: Brand-new V8 coverage report with native byte statistics and high performance processing
    icon: ⚡
  - title: Istanbul Compatible
    details: Full support for Istanbul coverage format with all standard report types
    icon: 🛠️
  - title: Framework Integration
    details: Works seamlessly with Playwright, Jest, Vitest, Cypress, and many other testing frameworks
    icon: 🔧
  - title: Modern UI
    details: Beautiful and interactive coverage reports with advanced sourcemap debugging capabilities
    icon: 🎨
  - title: CSS Coverage
    details: Comprehensive CSS coverage reporting alongside JavaScript coverage
    icon: 🎯
  - title: CI/CD Ready
    details: Built-in integrations for Codecov, Codacy, Coveralls, and Sonar Cloud
    icon: 🚀
---

<p style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 20px; flex-wrap: wrap;">
<a href="https://www.npmjs.com/package/monocart-coverage-reports"><img src="https://img.shields.io/npm/v/monocart-coverage-reports" alt="npm" style="display: inline-block; vertical-align: middle;"></a>
<img src="https://img.shields.io/github/license/cenfun/monocart-coverage-reports" alt="license" style="display: inline-block; vertical-align: middle;">
<img src="https://img.shields.io/github/actions/workflow/status/cenfun/monocart-coverage-reports/ci.yml" alt="build" style="display: inline-block; vertical-align: middle;">
<a href="https://packagephobia.com/result?p=monocart-coverage-reports"><img src="https://packagephobia.com/badge?p=monocart-coverage-reports" alt="install size" style="display: inline-block; vertical-align: middle;"></a>
<a href="https://npmgraph.js.org/?q=monocart-coverage-reports"><img src="https://img.shields.io/badge/npm-graph-blue" alt="npm graph" style="display: inline-block; vertical-align: middle;"></a>
<img src="https://img.shields.io/librariesio/github/cenfun/monocart-coverage-reports" alt="dependencies" style="display: inline-block; vertical-align: middle;">
<a href="https://www.npmjs.com/package/monocart-coverage-reports"><img src="https://devimg.vercel.app/npm/downloads/monocart-coverage-reports?label={total}%20downloads/month" alt="downloads" style="display: inline-block; vertical-align: middle;"></a>
</p>


## Quick Start

### Installation

```sh
npm install monocart-coverage-reports
```

### Basic Usage

```js
const MCR = require('monocart-coverage-reports');
const mcr = MCR({
    name: 'My Coverage Report',
    outputDir: './coverage-reports',
    reports: ["v8", "console-details"]
});
await mcr.add(coverageData);
await mcr.generate();
```

### Command Line

```sh
mcr node my-app.js -r v8,console-details
```


- Refreshing `eol=lf` for snapshot of test (Windows)

```sh
git add . -u
git commit -m "Saving files before refreshing line endings"

npm run eol
```

## Thanks

- [@bcoe](https://github.com/bcoe)
- [@edumserrano](https://github.com/edumserrano)
---
