import type { NextConfig } from "next";
const remoteHost = new URL(
  process.env.NEXT_PUBLIC_CMS_URL as string
).hostname;

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: remoteHost,
        pathname: "/images/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
