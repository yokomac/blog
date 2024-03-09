/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && "/blog",
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  
}
module.exports = nextConfig;
