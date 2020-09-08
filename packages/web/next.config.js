const withTM = require('next-transpile-modules')([
  '@apollo/react-hooks'
])

const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {}

module.exports = withTM({
  distDir: 'dist/.next',
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  typescript: {
    ignoreDevErrors: true,
  },
  poweredByHeader: false,
  compress: false,
});