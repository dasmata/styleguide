module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'jsdoc',
    'compat',
    'jest'
  ],
  "settings": {
    "polyfills": [
      "Promise",
    ]
  },
  'rules': {
    'array-callback-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    'quote-props': ['error', 'as-needed', {
      'unnecessary': false
    }],
    'comma-dangle': ['error', 'never'],
    'compat/compat': 'error',
    'consistent-return': 'off',
    'eqeqeq': ['error', 'smart'],
    'func-names': 'off',
    'import/extensions': ['error', 'never', { 'json': 'always' }],
    'import/no-extraneous-dependencies': ['off',
      {
        'devDependencies': false,
        'optionalDependencies': false,
        'peerDependencies': false,
      }],
    'import/no-unresolved': ['error', { 'ignore': ['postal'] }],
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-type': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-returns-type': 'error',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
    'no-multi-spaces': ['error',
      {
        'exceptions': {
          'VariableDeclarator': true,
          'ImportDeclaration': true,
        },
      }],
    'no-new': 'off',
    'no-unused-vars': ['error', { 'args': 'none' }],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'valid-jsdoc': 'error',
    'jsx-a11y/class-methods-use-this': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/label-has-for': [
      2,
      {
        'components': ['Label'],
        'required': {
          'some': ['nesting', 'id'],
        },
        'allowChildren': false,
      },
    ],
  },
};
