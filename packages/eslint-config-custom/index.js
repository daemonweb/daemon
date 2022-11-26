module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["solid"],
  extends: [
    "eslint:recommended",
    "turbo", 
    "prettier",
    "plugin:solid/typescript",
  ]
};