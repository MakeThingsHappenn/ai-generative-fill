/** @type {import('next').NextConfig} */

import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/", // 根路径
        destination: "/en/", // 重定向的目标路径
        permanent: false, // 如果为 true，表示永久重定向（301），否则为临时重定向（302）
      },
    ];
  },
  images: {
    domains: [
      "replicate.delivery",
      "ameerazam08-flux-1-dev-inpainting-model-beta-gpu.hf.space",
      "images.ai-generative-fill.com",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
        crypto: false,
        stream: false,
        util: false,
        buffer: false,
      };
    }
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ["@aws-sdk/*"],
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;

