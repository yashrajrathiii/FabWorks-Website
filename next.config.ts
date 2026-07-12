import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the parent folder confuses root inference.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
