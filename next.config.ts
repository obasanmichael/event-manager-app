import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pexels.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      // Add more domains if you use others
    ],
  },
};

export default nextConfig;
