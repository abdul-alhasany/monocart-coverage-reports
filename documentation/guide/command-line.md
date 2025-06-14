# Command Line

> The CLI will run the program as a [child process](https://nodejs.org/docs/latest/api/child_process.html) with `NODE_V8_COVERAGE=dir` until it exits gracefully, and generate the coverage report with the coverage data from the `dir`.

## Installation

### Installing globally
```sh
npm i monocart-coverage-reports -g
mcr node ./test/specs/node.test.js -r v8,console-details --lcov
```

### Locally in your project
```sh
npm i monocart-coverage-reports
npx mcr node ./test/specs/node.test.js -r v8,console-details --lcov
```

## CLI Options

See all options with running `mcr` or `mcr --help`

## Using -- to separate sub CLI args

```sh
mcr -c mcr.config.js -- sub-cli -c sub-cli.config.js
```

## Examples

### [Mocha](https://github.com/mochajs/mocha)
```sh
mcr mocha ./test/**/*.js
```

### [TypeScript](https://github.com/microsoft/typescript)

- [tsx](https://github.com/privatenumber/tsx)
```sh
cross-env NODE_OPTIONS="--import tsx" npx mcr tsx ./src/example.ts
cross-env NODE_OPTIONS="--import tsx" npx mcr mocha ./test/**/*.ts
# Node.js v18.19.0 +
mcr --import tsx tsx ./src/example.ts
mcr --import tsx mocha ./test/**/*.ts
```
- [ts-node](https://github.com/TypeStrong/ts-node)
```sh
cross-env NODE_OPTIONS="--loader ts-node/esm --no-warnings" npx mcr ts-node ./src/example.ts
cross-env NODE_OPTIONS="--loader ts-node/esm --no-warnings" npx mcr mocha ./test/**/*.ts
```

### [AVA](https://github.com/avajs/ava)
```sh
mcr ava
```
