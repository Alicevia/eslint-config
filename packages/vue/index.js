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
    {
      files: ['*.vue'],
      rules: {
        'vue/multi-word-component-names': [
          'error',
          {
            ignores: ['index'], //需要忽略的组件名
          },
        ],
      },
    },
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
    'comma-spacing': ['error', { before: false, after: true }],
    'space-before-function-paren': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0,maxBOF: 0 }],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error',{ before: true, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'no-console': ['error', { allow: ['warn', 'error'] }], 
  },
}
