/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'experimental-serverless-trace',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add other routes as needed
    };
  },
}

module.exports = nextConfig
