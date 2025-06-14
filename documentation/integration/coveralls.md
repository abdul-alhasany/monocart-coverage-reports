# Coveralls

[![Coverage Status](https://coveralls.io/repos/github/cenfun/monocart-coverage-reports/badge.svg?branch=main)](https://coveralls.io/github/cenfun/monocart-coverage-reports?branch=main)

## Using `lcov` report:

```js
const coverageOptions = {
    outputDir: "./coverage-reports",
    lcov: true
};
```

## Github actions:

```yml
- name: Coveralls
    uses: coverallsapp/github-action@v2
    with:
        files: ./coverage-reports/lcov.info
```
