// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  ecmaFeatures: {
    'classes': true,
    'jsx': true
  },
  env: {
    browser: true,
    jest: true
  },
  extends: ['standard', 'standard-react'],
  // add your custom rules here
  'rules': {
    'no-unused-expressions': 0,

    'import/extensions': ['error', 'never', { 'packages': 'always' }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  globals: {
    'it': true,
    'localStorage': true
  }
}
