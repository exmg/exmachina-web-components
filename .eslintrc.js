module.exports = {
  plugins: ['lit', '@typescript-eslint'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:lit/recommended'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
  },
  rules: {
    'lit/no-invalid-html': 0,
    'max-len': [
      'error',
      {
        code: 140,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // We probably want to enable this at some time
    '@typescript-eslint/explicit-function-return-type': 'off', // Don't think in most cases this is needed
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'object-curly-spacing': ['error', 'never'],
    quotes: [2, 'single'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
  },
};
