import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React Strict Mode for better debugging
  reactStrictMode: true,

  // Enable SWC minification for faster builds
  swcMinify: true,
};

export default nextConfig;
