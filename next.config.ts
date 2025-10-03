import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  output: 'export', // Static export instead of next export
}

export default nextConfig
