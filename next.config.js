/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pagesTestGithub' : '',
  trailingSlash: true
}

module.exports = nextConfig