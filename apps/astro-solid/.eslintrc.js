module.exports = {
  root: true,
  extends: ["custom", "plugin:solid/typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: { "project": ["./tsconfig.json"] },
  plugins: ["solid"]
}