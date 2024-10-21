/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/nectar',
        destination: 'https://nectar.ai',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
