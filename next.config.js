/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"]
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
