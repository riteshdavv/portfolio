/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 

