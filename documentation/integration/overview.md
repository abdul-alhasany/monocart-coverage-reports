# Integration Overview

## Integration with Any Testing Framework

### API
- Collecting coverage data when any stage of the test is completed, and adding the coverage data to the coverage reporter. `await mcr.add(coverageData)`
- Generating the coverage reports after the completion of all tests. `await mcr.generate()`
- see [Multiprocessing Support](/guide/multiprocessing)

### CLI
- Wrapping with any CLI. `mcr your-cli --your-arguments`
- see [Command line](/guide/command-line)

## Testing Framework Examples

- [Playwright](/integration/playwright)
- [Jest](/integration/jest)
- [Vitest](/integration/vitest)
- [Puppeteer](/integration/puppeteer)
- [Cypress](/integration/cypress)
- [Other Frameworks](/integration/other-frameworks)

## CI/CD Services

- [Codecov](/integration/codecov)
- [Codacy](/integration/codacy)
- [Coveralls](/integration/coveralls)
- [Sonar Cloud](/integration/sonar-cloud)
