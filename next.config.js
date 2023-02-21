/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    baseURL: "http://localhost:3000"
  }
}

module.exports = nextConfig
