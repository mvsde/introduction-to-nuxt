module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case']
  }
}
