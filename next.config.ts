import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 정적 사이트로 빌드 (Vercel/Netlify 배포 시 제거 가능)
  images: {
    unoptimized: true, // 정적 빌드 시 필요. Vercel 배포 시 제거하면 next/image 최적화 활성화
  },
};

export default nextConfig;
