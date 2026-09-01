import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "/**",
      }
    ],
  },
  output: "standalone", // for deployment on EC2 this is required // TODO: add this check to EC2 code if not present build should fail with proper error message what to do to fix it
}

export default nextConfig
