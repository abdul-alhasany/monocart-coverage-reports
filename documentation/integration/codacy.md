# Codacy

[![Codacy](https://app.codacy.com/project/badge/Coverage/715016ea8e90479db875b777db8bad55)](https://app.codacy.com/gh/cenfun/monocart-coverage-reports/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage)

## Using `lcov` report:

```js
const coverageOptions = {
    outputDir: "./coverage-reports",
    lcov: true
};
```

## Github actions:

```yml
- name: Codacy Coverage Reporter
    uses: codacy/codacy-coverage-reporter-action@v1
    with:
        project-token: ${{ secrets.CODACY_PROJECT_TOKEN }}
        coverage-reports: ./docs/mcr/lcov.info
```
