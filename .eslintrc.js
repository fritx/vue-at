module.exports = {
  root: true,
  extends: [
    // https://eslint.vuejs.org/user-guide/#installation
    // add more generic rulesets here, such as:
    'eslint:recommended',
    '@vue/standard',
    // 'plugin:vue/vue3-recommended',
    'plugin:vue/recommended', // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    'space-before-function-paren': 'warn',
    'operator-linebreak': 'warn',
    'no-tabs': 'warn',
    'no-new': 'warn',
    eqeqeq: 'warn',
    indent: 'warn',
    quotes: 'warn',
    semi: 'warn',
    'vue/multi-word-component-names': 'off',
    'no-var': 'off',
    // ...
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
