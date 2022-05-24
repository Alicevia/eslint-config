module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      extends: ['plugin:vue/vue3-recommended', '@alicevia/basic'],
      rules: {
        'no-unused-vars': 'off',
        'vue/multi-word-component-names': 0,
        'vue/html-self-closing': ['error', {
          html: {
            void: 'never',
            normal: 'never',
            component: 'never'
          },
          svg: 'always',
          math: 'always'
        }],
        'vue/max-attributes-per-line': 'off'

      }
    }
  ]
}
