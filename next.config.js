/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    concurrentFeatures: true,
  },
  swcMinify: false,
};

module.exports = nextConfig;
