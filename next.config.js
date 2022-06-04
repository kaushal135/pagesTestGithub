/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://kaushal135.github.io/pagesTestGithub' : '',
  trailingSlash: true
}

module.exports = nextConfig