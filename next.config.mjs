/** @type {import('next').NextConfig} */
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
    domains: ["replicate.delivery"],
  },
};

export default nextConfig;

