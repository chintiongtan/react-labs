export default {
  '*.+(js|jsx|ts|tsx|json)': [
    'eslint --ignore-path .eslintignore --fix',
    'prettier --ignore-path .gitignore --write',
  ],
};
