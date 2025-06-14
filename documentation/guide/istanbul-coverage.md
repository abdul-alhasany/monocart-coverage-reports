# Istanbul Coverage Data

## Collecting Istanbul Coverage Data

- Before coverage collection: Instrumenting source code with Istanbul
    - webpack with babel loader: [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul), see example: [webpack.config-istanbul.js](./test/build/webpack.config-istanbul.js)
    - CLI: [nyc instrument](https://github.com/istanbuljs/nyc/blob/master/docs/instrument.md) or API: [istanbul-lib-instrument](https://github.com/istanbuljs/istanbuljs/blob/main/packages/istanbul-lib-instrument/api.md)
    - vite: [vite-plugin-istanbul](https://github.com/ifaxity/vite-plugin-istanbul)
    - rollup: [rollup-plugin-istanbul](https://github.com/artberri/rollup-plugin-istanbul)
    - swc: [swc-plugin-coverage-instrument](https://github.com/kwonoj/swc-plugin-coverage-instrument)

## Browser Collection

- Collecting coverage data from `window.__coverage__`, example: [test-istanbul.js](./test/test-istanbul.js)

## Node.js Collection

- Collecting coverage data from `global.__coverage__`

## CDP Collection

- `getIstanbulCoverage()` see [CDP Client API](/guide/cdp-client)
