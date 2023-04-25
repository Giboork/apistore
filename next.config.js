/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  webpackDevMiddleware: config => {
    // Ignore changes in node_modules
    config.watchOptions.ignored = /node_modules/
    return config
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
