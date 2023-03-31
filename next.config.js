/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  webpackDevMiddleware: (config) => {
    // Ignore changes in node_modules
    config.watchOptions.ignored = /node_modules/;
    return config;
  },
}

module.exports = nextConfig
