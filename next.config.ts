import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rainbowdhammafoundation.org',
      },
      {
        protocol: 'https',
        hostname: 'cms.rainbowdhammafoundation.org',
      },
      {
        protocol: 'https',
        hostname: '0.gravatar.com',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com', // For existing placeholder images
      },
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
      }
    ],
  },
};

export default nextConfig;
