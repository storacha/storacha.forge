import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',  
  images: {
    domains: [],
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig