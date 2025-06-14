# Adding Empty Coverage for Untested Files

By default the untested files will not be included in the coverage report, we can add empty coverage for untested files with option `all`, the untested files will show 0% coverage.

## Basic Usage

```js
const coverageOptions = {
    all: './src',

    // or multiple dirs
    all: ['./src', './lib'],
};
```

## Advanced Configuration

The untested files will apply to the `sourceFilter`. And it also supports additional `filter` (return the file type for js or css coverage):

```js
const coverageOptions = {
    all: {
        dir: ['./src'],
        filter: {
            // exclude files
            '**/ignored-*.js': false,
            '**/*.html': false,
            // empty css coverage
            '**/*.scss': "css",
            '**/*': true
        }
    }
};
```

## Transforming Files

We can also compile these untested files, such as .ts, .jsx, or .vue, etc., so that they can be analyzed by the default AST parser, thus get more coverage metric data.

```js
const path = require("path");
const swc = require("@swc/core");
const coverageOptions = {
    all: {
        dir: ['./src'],
        transformer: async (entry) => {
            const { code, map } = await swc.transform(entry.source, {
                filename: path.basename(entry.url),
                sourceMaps: true,
                isModule: true,
                jsc: {
                    parser: {
                        syntax: "typescript",
                        jsx: true
                    },
                    transform: {}
                }
            });
            entry.source = code;
            entry.sourceMap = JSON.parse(map);
        }
    }
};
```
