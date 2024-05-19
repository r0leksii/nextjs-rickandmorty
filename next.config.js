/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (defaultPathMap, { buildId, dev, dir, distDir, outDir }) {
    return {
      '/': { page: '/' },
      '/characters': { page: '/characters' },
      // Add other routes here if needed
    }
  },
  images: {
    remotePatterns: [
      {
        hostname: 'rickandmortyapi.com',
        pathname: '/api/character/avatar/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
