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
  assetPrefix: process.env.BASE_PATH || '',
  url: 'https://github.com/yokomac/blog/blob/main/',
}
module.exports = nextConfig;
