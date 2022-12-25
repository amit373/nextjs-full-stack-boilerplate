// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { i18n } = require('./next-i18next.config');

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  i18n,
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
});
