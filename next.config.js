/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  compiler: {
    reactRemoveProperties: { properties: ['^data-testId$'] },
    // removeConsole: true,
  },
  eslint: {
    dirs: ['pages', 'components']
  }
}

module.exports = nextConfig 
