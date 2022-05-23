module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:import/typescript',
    '@alicevia/basic'
  ]
  // settings: {
  //   'import/resolver': {
  //     node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] }
  //   }
  // },
}
