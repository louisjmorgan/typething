/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: isProd ? 'https://storage.googleapis.com/www.typething.io/' : undefined,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig