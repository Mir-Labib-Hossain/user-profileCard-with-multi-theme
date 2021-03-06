module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "react", "react-hooks"],
  rules: {
    indent: 0,
    "no-console": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "class-methods-use-this": 0,
    "react/react-in-jsx-scope": 0,
    "import/no-named-as-default": 0,
    "react/state-in-constructor": 0,
    "react/prefer-stateless-function": 0,
    "react-hooks/rules-of-hooks": "error",
    "jsx-no-constructed-context-values": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "react/jsx-no-constructed-context-values": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
