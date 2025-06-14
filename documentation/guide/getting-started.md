# Getting Started

## Overview

Monocart Coverage Reports is a comprehensive JavaScript code coverage tool that supports both V8 native coverage and Istanbul coverage formats. It provides a modern, feature-rich reporting interface with support for various testing frameworks and CI/CD integrations.

## Key Features

- **V8 Native Coverage**: Brand-new V8 coverage report user interface with native byte statistics
- **Istanbul Compatibility**: Full support for Istanbul coverage format and reports
- **High Performance**: Optimized for processing large coverage datasets
- **CSS Coverage**: Support for CSS coverage reporting
- **Sourcemap Support**: Advanced sourcemap conversion and debugging
- **Multiple Report Formats**: Console, HTML, JSON, LCOV, Markdown, and more
- **Framework Integration**: Works with Playwright, Jest, Vitest, Cypress, and many others
- **CI/CD Ready**: Built-in support for Codecov, Codacy, Coveralls, and Sonar Cloud

## Installation

> It's recommended to use [Node.js 20+](https://nodejs.org/).

Install the package using npm:

```sh
npm install monocart-coverage-reports
```

## Quick Start

### Basic API Usage

```js
const MCR = require('monocart-coverage-reports');
const mcr = MCR({
    name: 'My Coverage Report - 2024-02-28',
    outputDir: './coverage-reports',
    reports: ["v8", "console-details"],
    cleanCache: true
});
await mcr.add(coverageData);
await mcr.generate();
```

### Using ES Modules

```js
import { CoverageReport } from 'monocart-coverage-reports';
const mcr = new CoverageReport();
await mcr.loadConfig();
```

### Command Line Usage

```sh
mcr node my-app.js -r v8,console-details
```

## Next Steps

- Learn about [Usage](/guide/usage) for detailed API and CLI examples
- Explore [Available Reports](/api/reports) to see all supported output formats
- Check out [Integration Examples](/integration/overview) for your testing framework
- Review [Options](/api/options) for complete configuration reference
