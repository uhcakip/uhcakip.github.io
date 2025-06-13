export default {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  endOfLine: 'lf',
  quoteProps: 'preserve',
  bracketSpacing: true,
  bracketSameLine: false,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.html'],
      options: {
        singleQuote: false,
        tabWidth: 4,
        htmlWhitespaceSensitivity: 'ignore',
        bracketSameLine: true,
        singleAttributePerLine: true,
      },
    },
    {
      files: ['*.css'],
      options: {
        singleQuote: false,
        printWidth: 120,
      },
    },
    {
      files: ['*.js'],
      options: {
        semi: true,
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
}