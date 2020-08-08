module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'camelcase': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "labelComponents": [],
        "labelAttributes": [],
        "controlComponents": [],
        "assert": "either",
        "depth": 25
      }
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        'allowExpressions': true
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
        'tsx': 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      'typescript': {}
    }
  }
};
