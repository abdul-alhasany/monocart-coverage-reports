# Filtering Results

## Using `entryFilter` and `sourceFilter` to filter the results for V8 report

When V8 coverage data collected, it actually contains the data of all entry files, for example:

- *dist/main.js*
- *dist/vendor.js*
- *dist/something-else.js*

We can use `entryFilter` to filter the entry files. For example, we should remove `vendor.js` and `something-else.js` if they are not in our coverage scope.

- *dist/main.js*

When inline or linked sourcemap exists to the entry file, the source files will be extracted from the sourcemap for the entry file, and the entry file will be removed if `logging` is not `debug`.

- *src/index.js*
- *src/components/app.js*
- *node_modules/dependency/dist/dependency.js*

We can use `sourceFilter` to filter the source files. For example, we should remove `dependency.js` if it is not in our coverage scope.

- *src/index.js*
- *src/components/app.js*

## Filter Examples

For example:
```js
const coverageOptions = {
    entryFilter: (entry) => entry.url.indexOf("main.js") !== -1,
    sourceFilter: (sourcePath) => sourcePath.search(/src\//) !== -1
};
```

Or using [`minimatch`](https://github.com/isaacs/minimatch) pattern:
```js
const coverageOptions = {
    entryFilter: "**/main.js",
    sourceFilter: "**/src/**"
};
```

Support multiple patterns:
```js
const coverageOptions = {
    entryFilter: {
        '**/node_modules/**': false,
        '**/vendor.js': false,
        '**/src/**': true
    },
    sourceFilter: {
        '**/node_modules/**': false,
        '**/**': true
    }
};
```

As CLI args (JSON-like string. Added in: v2.8):
```sh
mcr --sourceFilter "{'**/node_modules/**':false,'**/**':true}"
```

Note, those patterns will be transformed to a function, and the order of the patterns will impact the results:
```js
const coverageOptions = {
    entryFilter: (entry) => {
        if (minimatch(entry.url, '**/node_modules/**')) { return false; }
        if (minimatch(entry.url, '**/vendor.js')) { return false; }
        if (minimatch(entry.url, '**/src/**')) { return true; }
        return false; // else unmatched
    }
};
```

## Using `filter` instead of `entryFilter` and `sourceFilter`

If you don't want to define both `entryFilter` and `sourceFilter`, you can use `filter` instead. (Added in: v2.8)
```js
const coverageOptions = {
    // combined patterns
    filter: {
        '**/node_modules/**': false,
        '**/vendor.js': false,
        '**/src/**': true
        '**/**': true
    }
};
```
