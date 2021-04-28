module.exports = {
  '**/*.{js,jsx,json,yml,yaml,css,less,scss,ts,tsx,md,graphql,mdx}':
    'prettier --list-different',
  '**/*.{js,jsx,ts,tsx}': 'eslint',
  '**/{yarn.lock,package.json}': () => 'yarn check --integrity',
}
