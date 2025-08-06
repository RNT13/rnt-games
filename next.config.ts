/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    JWT_SECRET: process.env.JWT_SECRET
  },
  compiler: {
    styledComponents: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'media.rawg.io',
      'fake-api-tau.vercel.app',
      'images.unsplash.com',
      'example.com',
      'image.api.playstation.com',
      'cdn.awsli.com.br',
      'gaming-cdn.com',
      'upload.wikimedia.org',
      'www.europanet.com.br',
      'www.rockstargames.com',
      'live.staticflickr.com',
      'i.pinimg.com',
      'i.ytimg.com',
      'sm.ign.com',
      'f.i.uol.com.br',
      'www.nintendo.com',
      'cdn1.epicgames.com',
      'blog.br.playstation.com',
      'shared.fastly.steamstatic.com'
    ]
  }
}

module.exports = nextConfig
