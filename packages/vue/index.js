module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@alicevia/eslint-config-ts', 'plugin:vue/vue3-recommended'],
  rules: {
    'vue/multi-word-component-names': 0,
  },
}
