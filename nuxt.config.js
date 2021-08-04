export default {
  target: 'static',

  modern: 'server',

  generate: {
    fallback: true,
    subFolders: false
  },

  head: {
    titleTemplate: '%s | Introduction to Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A short introduction to Nuxt.js built with Nuxt.js 😃' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i|Source+Sans+Pro:400,700' }
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

  build: {
    babel: {
      presets: [
        '@nuxt/babel-preset-app'
      ],
      plugins: [
        ['prismjs', {
          languages: ['bash', 'javascript', 'twig'],
          theme: 'coy',
          css: true
        }]
      ]
    }
  }
}
