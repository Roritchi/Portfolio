module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"]
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(md|txt)$/i,
      loader: 'raw-loader'
    })

    return config
  },
  i18n: {
    locales: ['de-DE', 'en-US', 'nl-NL'],
    defaultLocale: 'de-DE',
  },
}
