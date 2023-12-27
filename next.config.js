/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  target: 'experimental-serverless-trace',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '',
}

module.exports = nextConfig
