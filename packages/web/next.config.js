const path = require('path');
const withReactSvg = require('next-react-svg');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/svg'),
  distDir: 'dist/.next',
  typescript: {
    ignoreDevErrors: true,
  },
  poweredByHeader: false,
  compress: false,
  webpack(config, options) {
    return config;
  },
});
