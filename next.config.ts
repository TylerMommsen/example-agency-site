import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/services/ai-review-responses', destination: '/', permanent: true },
      { source: '/about/contact', destination: '/book-a-call', permanent: true },
      { source: '/contact', destination: '/book-a-call', permanent: true },
      { source: '/get-started', destination: '/book-a-call', permanent: true },
    ]
  },
}

export default nextConfig
