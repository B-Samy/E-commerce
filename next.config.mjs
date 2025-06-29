/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.prod.website-files.com', 'cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Custom Webpack config for client-side
    }
    return config;
  },
};

export default nextConfig;
