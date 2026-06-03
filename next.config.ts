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
  // Expose basePath to client/server components so public-folder
  // assets (logo, etc.) can be prefixed correctly in static export.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
