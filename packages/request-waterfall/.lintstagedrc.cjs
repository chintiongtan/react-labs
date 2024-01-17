const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `next lint --ignore-path .eslintignore --fix --file ${filenames
    .map((f) => path.relative(`${process.cwd()}/packages/request-waterfall`, f))
    .join(' --file ')}`
 
module.exports = {
  '*.{js,jsx,ts,tsx,json}': [
    buildEslintCommand,
    'prettier --ignore-path .gitignore --write'
  ],
}
