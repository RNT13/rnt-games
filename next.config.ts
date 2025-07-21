/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['media.rawg.io', 'fake-api-tau.vercel.app', 'images.unsplash.com']
  }
}

module.exports = nextConfig
