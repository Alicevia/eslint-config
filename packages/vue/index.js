module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    indent: ['error', 2],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0,maxBOF: 0 }],
    'key-spacing': ['error', { afterColon: true }],
    'arrow-spacing': ['error',{ before: true, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }], 
  },
}
