# Sonar Cloud

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=monocart-coverage-reports&metric=coverage)](https://sonarcloud.io/summary/new_code?id=monocart-coverage-reports)

## Using `lcov` report

Github actions example:

```yml
- name: Analyze with SonarCloud
    uses: sonarsource/sonarcloud-github-action@master
    env:
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
    with:
        projectBaseDir: ./
        args: >
        -Dsonar.organization=cenfun
        -Dsonar.projectKey=monocart-coverage-reports
        -Dsonar.projectName=monocart-coverage-reports
        -Dsonar.javascript.lcov.reportPaths=docs/mcr/lcov.info
        -Dsonar.sources=lib
        -Dsonar.tests=test
        -Dsonar.exclusions=dist/*,packages/*
```
