module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': ['off', 'unix'],
    'import/extensions': ['off'],
    'react/jsx-filename-extension': ['off', { extensions: ['.ts', '.tsx'] }],
    'import/no-unresolved': ['off'],
    'no-use-before-define': ['off', { functions: false, classes: true }],
    'no-undef': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['off'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.spec.tsx', '**/*.spec.ts', '**/*.stories.tsx', '**/webpack.config.js'] }],
  },
};
