import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and adjust basePath if deploying to a project page (e.g., username.github.io/repo-name)
  // basePath: '/product-showcase',
};

export default nextConfig;
