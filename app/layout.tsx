import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-body",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

// ============================================================
// 📝 SEO 메타데이터를 본인 정보로 수정하세요
// ============================================================
export const metadata: Metadata = {
  title: "김종훈 | 백엔드 개발자 포트폴리오",
  description:
    "사용자 경험을 최우선으로 생각하는 백엔드 개발자 김종훈의 이력서 및 포트폴리오입니다.",
  keywords: ["김종훈", "개발자", "포트폴리오", "React", "Next.js"],
  openGraph: {
    title: "김종훈 | 백엔드 개발자",
    description: "백엔드 개발자 김종훈의 이력서 및 포트폴리오",
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
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${cormorantGaramond.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
