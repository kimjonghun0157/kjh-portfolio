# 📄 포트폴리오 — Next.js + Tailwind CSS

개인 이력서/포트폴리오 웹사이트 프로젝트입니다.  
[gwak2837.vercel.app](https://gwak2837.vercel.app/ko) 스타일을 참고하여 제작되었습니다.

## 🚀 시작하기

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 브라우저에서 확인
open http://localhost:3000
```

## 📝 본인 정보로 수정하기

**핵심 파일 하나만 수정하면 됩니다:**

```
data/portfolio.ts   ← 프로필, 경력, 프로젝트, 학력, 기술스택 데이터
```

### 수정 순서

1. `data/portfolio.ts` — 본인의 정보로 내용 교체
2. `app/layout.tsx` — SEO 메타데이터 (title, description) 수정
3. `components/Header.tsx` — 네비게이션 이름 수정
4. `components/Footer.tsx` — 푸터 이름 수정
5. `public/images/` — 프로필 사진, 프로젝트 스크린샷 추가

## 🏗 프로젝트 구조

```
portfolio/
├── app/
│   ├── globals.css        # Tailwind + 커스텀 디자인 토큰
│   ├── layout.tsx         # 루트 레이아웃 + SEO 메타데이터
│   └── page.tsx           # 메인 페이지 (섹션 조합)
├── components/
│   ├── Header.tsx         # 상단 네비게이션 (스크롤 시 블러)
│   ├── Profile.tsx        # 프로필 + 연락처 + 소셜 링크
│   ├── Experience.tsx     # 경력 (타임라인 스타일)
│   ├── Projects.tsx       # 프로젝트 카드
│   ├── Education.tsx      # 학력 + 자격증
│   ├── Skills.tsx         # 기술 스택 (카테고리별 배지)
│   └── Footer.tsx         # 푸터
├── data/
│   └── portfolio.ts       # ⭐ 모든 데이터가 여기에!
├── public/images/         # 이미지 파일
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## 🎨 디자인 커스터마이징

`app/globals.css`의 `@theme` 블록에서 색상과 폰트를 변경할 수 있습니다:

```css
@theme {
  --color-accent: #4f46e5;       /* 포인트 색상 */
  --color-surface: #fafaf9;      /* 배경색 */
  --color-ink: #1c1917;          /* 텍스트 색상 */
}
```

## 🌐 배포하기

### Vercel (추천)

1. GitHub에 프로젝트 push
2. [vercel.com](https://vercel.com)에서 Import
3. 자동 빌드 & 배포 완료!

> Vercel 배포 시 `next.config.ts`에서 `output: "export"`와
> `images: { unoptimized: true }`를 제거하면  
> `next/image` 최적화와 ISR 등 Next.js의 모든 기능을 활용할 수 있습니다.

### 기타 (Netlify, GitHub Pages 등)

`next.config.ts`의 `output: "export"` 설정을 유지하면 정적 HTML로 빌드되어
어디든 배포할 수 있습니다:

```bash
npm run build
# out/ 폴더가 생성됨 → 이 폴더를 배포
```

## ✨ 추가 기능 아이디어

- [ ] 다크모드 토글
- [ ] 다국어 지원 (i18n)
- [ ] 프로젝트 이미지 갤러리
- [ ] 블로그 연동 (MDX)
- [ ] 방문자 수 표시 (Google Analytics)
- [ ] PDF 자동 생성

## 📄 라이선스

MIT License
