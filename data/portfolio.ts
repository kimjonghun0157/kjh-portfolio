// ============================================================
// 📝 이 파일을 수정해서 본인의 정보로 채워주세요!
// ============================================================

export const profile = {
  name: "홍길동",
  nameEn: "Gildong Hong",
  title: "프론트엔드 개발자",
  tagline: "사용자 경험을 최우선으로 생각하는 개발자",
  email: "gildong@example.com",
  phone: "+82 10-1234-5678",
  location: "서울특별시 강남구",
  github: "https://github.com/your-github",
  linkedin: "https://linkedin.com/in/your-linkedin",
  blog: "https://velog.io/@your-velog",
  bio: `고객의 불편을 해결하는 제품을 만들고, 그 과정에서 얻은 기술을
다른 사람과 공유하면서 '왜 이 제품이 존재하는지' 끊임없이 질문합니다.`,
};

export const experience = [
  {
    company: "ABC 테크",
    companyUrl: "https://example.com",
    role: "Frontend Engineer",
    team: "Web Platform Team (8명)",
    period: "2023.06 ~ 현재",
    isCurrent: true,
    description:
      "월간 활성 사용자 500만 명의 B2C 플랫폼 웹 프론트엔드 개발 및 유지보수",
    techStack: ["React.js", "Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
    achievements: [
      {
        title: "웹 성능 최적화",
        description:
          "Core Web Vitals 개선으로 LCP 3.2초 → 1.8초, CLS 0.25 → 0.05로 개선하여 SEO 순위 상승 및 이탈률 15% 감소에 기여",
      },
      {
        title: "디자인 시스템 구축",
        description:
          "Storybook 기반의 공통 컴포넌트 라이브러리를 설계·구축하여 디자이너-개발자 간 커뮤니케이션 비용을 40% 절감하고, 신규 페이지 개발 속도를 2배 향상",
      },
      {
        title: "A/B 테스트 인프라 도입",
        description:
          "Feature Flag 시스템을 도입하여 5만 명 대상 A/B 테스트를 3건 진행, 결제 전환율 8% 상승한 UI를 데이터 기반으로 선정",
      },
    ],
  },
  {
    company: "XYZ 스타트업",
    companyUrl: "https://example.com",
    role: "Frontend Developer",
    team: "Product Team (5명)",
    period: "2022.01 ~ 2023.05",
    isCurrent: false,
    description: "초기 스타트업에서 MVP부터 정식 출시까지 프론트엔드 전담 개발",
    techStack: ["React.js", "Redux", "Styled Components", "Firebase"],
    achievements: [
      {
        title: "MVP 출시 및 고객 확보",
        description:
          "3개월 만에 MVP를 출시하고, 출시 6개월 내 MAU 1만 명 달성",
      },
      {
        title: "CI/CD 파이프라인 구축",
        description:
          "GitHub Actions 기반 CI/CD를 구축하여 배포 시간을 30분 → 5분으로 단축",
      },
    ],
  },
];

export const projects = [
  {
    title: "개인 포트폴리오",
    period: "2024.01 ~ 현재",
    teamSize: "1명 (본인)",
    description:
      "Next.js와 Tailwind CSS로 제작한 개인 이력서/포트폴리오 사이트. 다국어 지원, 다크모드, 인쇄 최적화를 목표로 개발",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    links: {
      github: "https://github.com/your-github/portfolio",
      live: "https://your-portfolio.vercel.app",
    },
    highlights: [
      "SSG를 활용한 정적 사이트 빌드로 빠른 로딩 속도 확보",
      "CSS @media print를 활용한 인쇄용 스타일 최적화",
    ],
  },
  {
    title: "실시간 채팅 앱",
    period: "2023.08 ~ 2023.11",
    teamSize: "2명",
    description:
      "WebSocket 기반 실시간 채팅 애플리케이션. 1:1 채팅, 그룹 채팅, 이미지 전송 지원",
    techStack: [
      "React.js",
      "Socket.io",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "GCP Cloud Run",
    ],
    links: {
      github: "https://github.com/your-github/chat-app",
    },
    highlights: [
      "Socket.io를 활용한 실시간 양방향 통신 구현",
      "Docker 컨테이너화 및 GCP Cloud Run 배포",
    ],
  },
  {
    title: "가격 추적 알리미",
    period: "2023.03 ~ 2023.06",
    teamSize: "1명 (본인)",
    description:
      "쇼핑몰 상품 가격 변동을 추적하여 목표 가격 도달 시 웹 푸시 알림을 보내는 서비스",
    techStack: ["Next.js", "PWA", "Web Push", "Puppeteer", "PostgreSQL"],
    links: {
      github: "https://github.com/your-github/price-tracker",
      live: "https://price-tracker.vercel.app",
    },
    highlights: [
      "Puppeteer를 활용한 주기적 크롤링 및 가격 변동 감지",
      "PWA + Web Push API로 모바일 알림 기능 구현",
    ],
  },
];

export const education = [
  {
    name: "중앙대학교",
    major: "컴퓨터공학부 공학사",
    period: "2017.03 ~ 2022.02",
    note: "전체 학점: 4.1 / 4.5",
  },
];

export const certificates = [
  {
    name: "정보처리기사",
    issuer: "과학기술정보통신부",
    date: "2024.06",
  },
  {
    name: "TOPCIT 15회",
    issuer: "과학기술정보통신부",
    date: "2021.05",
    note: "627점",
  },
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "CSS3", "Python", "SQL"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Zustand", "React Query"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
  Cloud: ["Vercel", "AWS (EC2, S3, RDS)", "GCP (Cloud Run)", "Cloudflare"],
  DevOps: ["GitHub Actions", "Docker", "Sentry", "Google Analytics"],
};
