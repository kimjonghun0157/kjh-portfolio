import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-body",
});

// ============================================================
// 📝 SEO 메타데이터를 본인 정보로 수정하세요
// ============================================================
export const metadata: Metadata = {
  title: "홍길동 | 프론트엔드 개발자 포트폴리오",
  description:
    "사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 홍길동의 이력서 및 포트폴리오입니다.",
  keywords: ["프론트엔드", "개발자", "포트폴리오", "React", "Next.js"],
  openGraph: {
    title: "홍길동 | 프론트엔드 개발자",
    description: "프론트엔드 개발자 홍길동의 이력서 및 포트폴리오",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKr.variable}>
      <body>{children}</body>
    </html>
  );
}
