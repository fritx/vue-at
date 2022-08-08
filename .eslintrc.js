module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard'
  ],
  rules: {
    'vue/multiline-html-element-content-newline': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/order-in-components': 'off',
    'vue/attributes-order': 'off',
    'vue/html-indent': 'off',
    'no-irregular-whitespace': 'off',
    'no-mixed-operators': 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
