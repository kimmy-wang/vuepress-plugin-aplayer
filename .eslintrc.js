module.exports = {
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ["prettier"],
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "vue/max-attributes-per-line": 0,
    indent: ["error", 2]
  },
}
