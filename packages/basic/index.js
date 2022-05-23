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
    semi: ['error', 'never']
  },
  globals: {
    __dirname: 'readonly',
    defineEmits: 'readonly',
    defineProps: 'readonly',
    $message: 'readonly'
  }

  // settings: {
  //   'import/extensions': [
  //     '.js',
  //     '.jsx'
  //   ],
  // },
}
