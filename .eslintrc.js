module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "semi": ["error", "never"],
    "no-param-reassign": "off",
    "no-debugger": "off",
    "no-console": "off"
  }
}
