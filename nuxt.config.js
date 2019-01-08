const pkg = require('./package')

module.exports = {
  mode: 'universal',

  generate: {
    fallback: true
  },

  head: {
    titleTemplate: '%s | Introduction to Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Sans+Pro:400,400i,700' }
    ]
  },

  loading: {
    color: '#35495e'
  },

  css: [
    '@/assets/css/variables.css',
    '@/assets/css/scaffolding.css',
    '@/assets/css/typography.css',
    '@/assets/css/transitions.css'
  ],

  plugins: [
    '@/plugins/global'
  ],

  build: {
    babel: {
      presets: [
        '@nuxt/babel-preset-app'
      ],
      plugins: [
        ['prismjs', {
          languages: ['bash', 'javascript'],
          theme: 'coy',
          css: true
        }]
      ]
    },
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            emitWarning: true
          }
        })
      }
    }
  }
}
