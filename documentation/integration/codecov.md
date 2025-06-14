# Codecov

[![codecov](https://codecov.io/gh/cenfun/monocart-coverage-reports/graph/badge.svg?token=H0LW7UKYU3)](https://codecov.io/gh/cenfun/monocart-coverage-reports)

- Supports native `codecov` built-in report ([specification](https://docs.codecov.com/docs/codecov-custom-coverage-format))

```js
const coverageOptions = {
    outputDir: "./coverage-reports",
    reports: [
        ['codecov']
    ]
};
```

## Github actions:

```yml
- name: Codecov
    uses: codecov/codecov-action@v4
    with:
        token: ${{ secrets.CODECOV_TOKEN }}
        files: ./coverage-reports/codecov.json
```
