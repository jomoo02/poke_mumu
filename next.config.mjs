/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
    ],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/detail/:pokeKey',
        headers: [
          {
            key: 'cache-control',
            value: 's-maxage=600, stale-while-revalidate=30',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
