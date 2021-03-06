module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: ['eslint:recommended', 'standard'
  // 'plugin:import/recommended'
  ],
  rules: {
    'space-before-function-paren': ['error', 'always'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    camelcase: 'off',
  },
  globals: {
    __dirname: 'readonly',
    defineEmits: 'readonly',
    defineProps: 'readonly',
    $message: 'readonly',
    $loadingBar: 'readonly'
  }

  // settings: {
  //   'import/extensions': [
  //     '.js',
  //     '.jsx'
  //   ],
  // },
}
