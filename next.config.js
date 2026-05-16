/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict output for Vercel
  output: 'standalone',

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['imagedelivery.net'], // Cloudflare Images CDN
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudflare.com',
      },
    ],
  },

  // Compression
  compress: true,

  // Trailing slash consistency
  trailingSlash: false,

  // Power source header (fun + Vercel convention)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [{ key: 'X-Powered-By', value: 'Fitlab / Next.js' }],
      },
    ]
  },

  // Silence noisy build warnings
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
