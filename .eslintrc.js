module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    // '@vue/standard',
    // '@vue/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    "__DEV__": true,
    "__WECHAT__": true,
    "__ALIPAY__": true,
    "App": true,
    "Page": true,
    "Component": true,
    "wx": true,
    "my": true,
    "getApp": true,
    "getCurrentPages": true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "@typescript-eslint/indent": ["error", 2],
    '@typescript-eslint/no-explicit-any': 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json'
  }
}

// 'plugin:vue/essential',



// "@typescript-eslint/restrict-plus-operands": "error",
// "no-unused-vars": "off",
// 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
// 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
// 'no-tabs': 0,
// 'no-mixed-spaces-and-tabs': 0,
// "indent": [2, "tab"]