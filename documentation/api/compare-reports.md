# Compare Reports

> If the V8 data format is used for Istanbul reports, it will be automatically converted from V8 to Istanbul.

|                    | Istanbul                                                                                 | V8                                                    | V8 to Istanbul                                        |
| :----------------- | :--------------------------------------------------------------------------------------- | :---------------------------------------------------- | :---------------------------------------------------- |
| Coverage data      | [Istanbul](https://github.com/gotwarlost/istanbul/blob/master/coverage.json.md) (Object) | [V8](/guide/v8-coverage#v8-coverage-data-api) (Array) | [V8](/guide/v8-coverage#v8-coverage-data-api) (Array) |
| Output             | [Istanbul reports](/api/reports)                                                         | [V8 reports](/api/reports)                            | [Istanbul reports](/api/reports)                      |
| - Bytes            | ❌                                                                                        | ✅                                                     | ❌                                                     |
| - Statements       | ✅                                                                                        | ✅                                                     | ✅                                                     |
| - Branches         | ✅                                                                                        | ✅                                                     | ✅                                                     |
| - Functions        | ✅                                                                                        | ✅                                                     | ✅                                                     |
| - Lines            | ✅                                                                                        | ✅                                                     | ✅                                                     |
| - Execution counts | ✅                                                                                        | ✅                                                     | ✅                                                     |
| CSS coverage       | ❌                                                                                        | ✅                                                     | ✅                                                     |
| Minified code      | ❌                                                                                        | ✅                                                     | ❌                                                     |
