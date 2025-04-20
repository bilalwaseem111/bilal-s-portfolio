import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Required for static export
  distDir: 'out', // Explicit output directory
  images: {
    unoptimized: true // Required for static export
  },
  webpack(config) {
    return config
  },
  // Remove srcDir - Next.js 13+ doesn't use this
  // Instead, ensure your pages are in src/app (App Router) or src/pages (Pages Router)
}

export default nextConfig
