module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['standard', 'plugin:import/recommended'],
  plugins: [],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'], },
    },
  },
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode'
  ],
  rules: {
    'space-before-function-paren': ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        objects: 'always',
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
  globals: {
    __dirname: 'readonly',
    defineEmits: 'readonly',
    defineProps: 'readonly',
    $message: 'readonly',
  },
}
