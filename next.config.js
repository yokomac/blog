/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'
module.exports = {
  'process.env.BACKEND_URL': prod ? '/repository-Name' : '',
}

const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && "/blog",
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true } ,
  assetPrefix: '/your-base-path/',
}
module.exports = nextConfig;
