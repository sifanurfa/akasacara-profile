import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "akasacara-be.duckdns.org",
        port: "",
        pathname: "/api/uploads/**",
      },
      {
        protocol: "https",
        hostname: "akasacara-be.duckdns.org",
        pathname: "/api/uploads/**",
      },
      {
        protocol: "http",
        hostname: "akasacara-be.duckdns.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "akasacara-be.duckdns.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
