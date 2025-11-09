import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',  
  images: {
    domains: [],
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig