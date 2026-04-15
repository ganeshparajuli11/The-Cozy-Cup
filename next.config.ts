import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    deviceSizes: [375, 640, 768, 1024, 1280, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
}

export default nextConfig
