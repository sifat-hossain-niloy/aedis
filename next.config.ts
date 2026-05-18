import type { NextConfig } from "next";

// Set BASE_PATH=/aedis in CI for GitHub Pages (no custom domain).
// Leave unset locally and once www.aedis.ltd custom domain is live.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
