import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath is required for GitHub Pages project page deployment
  basePath: '/product-showcase',
};

export default nextConfig;
