/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pagestest/' : '',
  trailingSlash: true
}

module.exports = nextConfig