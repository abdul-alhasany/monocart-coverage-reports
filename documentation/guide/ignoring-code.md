# Ignoring Uncovered Codes

To ignore codes, use the special comment which starts with `v8 ignore `:

## Ignoring all until stop

```js
/* v8 ignore start */
function uncovered() {
}
/* v8 ignore stop */
```

## Ignoring the next line or next N lines

```js
/* v8 ignore next */
const os = platform === 'wind32' ? 'Windows' : 'Other';

const os = platform === 'wind32' ? 'Windows' /* v8 ignore next */ : 'Other';

// v8 ignore next 3
if (platform === 'linux') {
    console.log('hello linux');
}
```

## Compatible syntax

Compatible with [c8 coverage](https://github.com/bcoe/c8/?tab=readme-ov-file#ignoring-all-lines-until-told) or [nodejs coverage](https://nodejs.org/docs/latest/api/test.html#collecting-code-coverage) syntax

```js
/* c8 ignore start */
function uncovered() {
}
/* c8 ignore stop */

/* node:coverage disable */
function uncovered() {
}
/* node:coverage enable */
```
