// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Reliably',
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
    // {
    //   use: '@gridsome/vue-remark',
    //   options: {
    //     index: ['index'],
    //     baseDir: './cobra-md',
    //     pathPrefix: '/docs/reference/cli',
    //     typeName: 'CliPage',
    //     template: './src/templates/CliPage.vue',
    //     plugins: [
    //       '@gridsome/remark-prismjs',
    //       [
    //         'remark-behead',
    //         {depth: -1},
    //       ],
    //     ],
    //     remark: {
    //       autolinkHeadings: {
    //         content: {
    //           type: 'text',
    //           value: '#'
    //         }
    //       }
    //     }
    //   }
    // },
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
