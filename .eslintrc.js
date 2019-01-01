module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "max-len": ["error", { "code": 80 }],
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-restricted-syntax": [2, "ClassDeclaration"],
    "comma-dangle": [2,"never"],
    "block-scoped-var": 1,
    "curly": [2,"all"],
    "default-case": 2,
    "dot-notation": 2,
    "eqeqeq": 2,
    "guard-for-in": 1,
    "no-alert": 1,
    "no-caller": 2,
    "no-div-regex": 1,
    "no-else-return": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": [2,{"boolean":true,"number":true,"string":true}],
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-process-env": 1,
    "no-proto": 2,
    "no-redeclare": [2,{"builtinGlobals":true}],
    "no-return-assign": [2,"always"],
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-unused-expressions": 2,
    "no-useless-call": 2,
    "no-void": 2,
    "no-with": 2,
    "radix": 2,
    "wrap-iife": [2,"outside"],
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": [2,{"hoist":"all"}],
    "no-undef": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,
    "array-bracket-spacing": [1,"never",{}],
    "brace-style": [2,"1tbs",{}],
    "comma-spacing": [2,{"after":true}],
    "comma-style": [2],
    "eol-last": 2,
    "func-style": [2,"declaration"],
    "indent": [2,2],
    "linebreak-style": [2,"unix"],
    "no-continue": 2,
    "no-inline-comments": 2,
    "no-lonely-if": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [1,"always",{}],
    "operator-assignment": [2,"always"],
    "operator-linebreak": [2,"before"],
    "quotes": [2,"double","avoid-escape"],
    "semi": [2,"always"],
    "space-in-parens": [2,"never",{}],
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "wrap-regex": 1,
    "no-var": 2,
    "object-shorthand": [2,"always"],
    "prefer-const": 2,
    "prefer-spread": 2,
    "no-bitwise": 1,
    "no-plusplus": 1,
    "func-style": ["error", "declaration"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  }
};