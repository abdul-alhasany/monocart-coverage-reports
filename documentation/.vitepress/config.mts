import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monocart Coverage Reports",
  description: "A JavaScript code coverage tool to generate native V8 reports or Istanbul reports.",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  base: '/monocart-coverage-reports/',
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/'
    },
    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      link: '/zh/'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/options' },
      { text: 'Integration', link: '/integration/overview' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/guide/getting-started' },
            { text: 'Usage', link: '/guide/usage' },
            { text: 'Command Line', link: '/guide/command-line' },
            { text: 'Config File', link: '/guide/config-file' }
          ]
        },
        {
          text: 'Coverage Data',
          collapsed: true,
          items: [
            { text: 'Istanbul Coverage', link: '/guide/istanbul-coverage' },
            { text: 'V8 Coverage', link: '/guide/v8-coverage' },
            { text: 'CDP Client API', link: '/guide/cdp-client' }
          ]
        },
        {
          text: 'Advanced',
          collapsed: true,
          items: [
            { text: 'Filtering Results', link: '/guide/filtering' },
            { text: 'Source Path Resolution', link: '/guide/source-path' },
            { text: 'Untested Files', link: '/guide/untested-files' },
            { text: 'Ignoring Code', link: '/guide/ignoring-code' },
            { text: 'Multiprocessing', link: '/guide/multiprocessing' },
            { text: 'Merging Reports', link: '/guide/merging-reports' }
          ]
        },
        {
          text: 'Troubleshooting',
          collapsed: true,
          items: [
            { text: 'Common Issues', link: '/guide/common-issues' },
            { text: 'Debug Coverage', link: '/guide/debug-coverage' }
          ]
        },
        {
          text: 'Contributing',
          collapsed: true,
          items: [
            { text: 'Contributing Guide', link: '/guide/contributing' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Options', link: '/api/options' },
            { text: 'Available Reports', link: '/api/reports' },
            { text: 'Compare Reports', link: '/api/compare-reports' },
            { text: 'onEnd Hook', link: '/api/onend-hook' }
          ]
        }
      ],
      '/integration/': [
        {
          text: 'Testing Frameworks',
          items: [
            { text: 'Overview', link: '/integration/overview' },
            { text: 'Playwright', link: '/integration/playwright' },
            { text: 'Jest', link: '/integration/jest' },
            { text: 'Vitest', link: '/integration/vitest' },
            { text: 'Puppeteer', link: '/integration/puppeteer' },
            { text: 'Cypress', link: '/integration/cypress' },
            { text: 'Other Frameworks', link: '/integration/other-frameworks' }
          ]
        },
        {
          text: 'Services',
          items: [
            { text: 'Codecov', link: '/integration/codecov' },
            { text: 'Codacy', link: '/integration/codacy' },
            { text: 'Coveralls', link: '/integration/coveralls' },
            { text: 'Sonar Cloud', link: '/integration/sonar-cloud' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cenfun/monocart-coverage-reports' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/monocart-coverage-reports' }
    ],

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/cenfun/monocart-coverage-reports/edit/main/docs/:path'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Monocart Coverage Reports'
    }
  }
})
