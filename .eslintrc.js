module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // '@typescript-eslint/no-unused-vars': 'off',
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
    'no-unused-vars': [
      'error',
      {vars: 'off', args: 'after-used', ignoreRestSiblings: false},
    ],
  },
};
