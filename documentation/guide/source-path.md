# Source Path Resolution

## Resolve `sourcePath` for the Source Files

If the source file comes from the sourcemap, then its path is a virtual path. Using the `sourcePath` option to resolve a custom path.

For example, we have tested multiple dist files, which contain some common files. We hope to merge the coverage of the same files, so we need to unify the `sourcePath` in order to be able to merge the coverage data.

```js
const coverageOptions = {
    sourcePath: (filePath) => {
        // Remove the virtual prefix
        const list = ['my-dist-file1/', 'my-dist-file2/'];
        for (const str of list) {
            if (filePath.startsWith(str)) {
                return filePath.slice(str.length);
            }
        }
        return filePath;
    }
};
```

It also supports simple key/value replacement:
```js
const coverageOptions = {
    sourcePath: {
        'my-dist-file1/': '',
        'my-dist-file2/': ''
    }
};
```

Normalize the full path of the file:
```js
const path = require("path")

// MCR coverage options
const coverageOptions = {
    sourcePath: (filePath, info)=> {
        if (!filePath.includes('/') && info.distFile) {
            return `${path.dirname(info.distFile)}/${filePath}`;
        }
        return filePath;
    }
}
```
