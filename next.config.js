const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,

  reactStrictMode: true,

  pageExtensions: ["ts", "tsx", "js"],

  // ✅ REQUIRED for Next 16 (prevents turbopack error)
  turbopack: {},

  // ✅ Modern image config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
});

module.exports = nextConfig;