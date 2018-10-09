module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "airbnb-base",
    "plugin:vue/base",
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "plugin:vue/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "html",
      "vue",
      "import",
      "promise",
      "jsx-a11y"
    ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "strict": ["error", "global"],
    "quote-props": ["error", "always"],
    "comma-dangle": ["error", "always"],
    "func-call-spacing": ["error", "always"],
    "padded-blocks": ["error", "always"],
    "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "no-whitespace-before-property": "off",
    "global-require": "off",
    "no-spaced-func": "off",
    "no-new": "off",
  }
};
