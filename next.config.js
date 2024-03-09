/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && "/blog",
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true } ,
  
}
module.exports = nextConfig;
