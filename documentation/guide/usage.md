# Usage

## API Usage

### Basic Configuration

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

### Using ES Modules with Config File

```js
import { CoverageReport } from 'monocart-coverage-reports';
const mcr = new CoverageReport();
await mcr.loadConfig();
```

For more information about multiprocessing support, see the [Multiprocessing Guide](/guide/multiprocessing).

## CLI Usage

```sh
mcr node my-app.js -r v8,console-details
```

For more detailed CLI usage, see the [Command Line Guide](/guide/command-line).

## Configuration Options

- Default options: [lib/default/options.js](./lib/default/options.js)
- Options declaration see `CoverageReportOptions` [lib/index.d.ts](./lib/index.d.ts)
- See also: [Config File Guide](/guide/config-file)

For complete options reference, visit the [Options API](/api/options) page.
