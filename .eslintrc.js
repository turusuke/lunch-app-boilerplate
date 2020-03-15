module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions:  {
    ecmaVersion:  2020,
    sourceType:  'module',
  },
  rules:  {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/prefer-interface": "off"
  },
  settings: {
    react: {
      version: 'detect',
    }
  }
};
