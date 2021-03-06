// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Reliably',
  siteUrl: 'https://reliably.com',
  pathPrefix: '/docs',

  chainWebpack(config, { isServer }) {
    config.module.rules.delete('svg')
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
        .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')
  },

  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-TCWX6CW',
        cookie_flags: 'Max-Age=7200;Secure;SameSite=None',
        enabled: false,
        debug: false
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './cobra-md/',
        path: '**/*.md',
        typeName: 'CliPage',
        pathPrefix: '/reference/cli',
        remark: {
          plugins: [
            [
              'remark-behead',
              {depth: -1},
            ],
            '@gridsome/remark-prismjs',
          ],
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          }
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        index: ['index'],
        baseDir: './docs',
        pathPrefix: '/',
        typeName: 'DocPage',
        template: './src/templates/DocPage.vue',
        plugins: [
          '@gridsome/remark-prismjs',
          'remark-admonitions',
          'remark-attr',
        ],
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
