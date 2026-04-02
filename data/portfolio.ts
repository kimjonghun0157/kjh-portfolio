// ============================================================
// 📝 이 파일을 수정해서 본인의 정보로 채워주세요!
// ============================================================

export const profile = {
  name: "김종훈",
  nameEn: "Jonghun Kim",
  title: "백엔드 개발자",
  email: "whdgns4288@naver.com",
  phone: "+82 010-8006-4288",
  location: "서울특별시 금천구 독산동",
  github: "https://github.com/kimjonghun0157",
  linkedin: "",
  blog: "",
  birth: "1996.09.29",
  gender: "남자",
  nationality: "한국인",
  military: "군필(육군 병장 만기전역)",
  hobbies: "자전거, 달리기",
  bio: `사용자가 편리함을 느끼는 제품을 구현하는데 노력하고, 그 과정에서 얻은 엔지니어링 기술을 다른 사람과 공유하면서 '제품과 기술이 왜 존재하는지' 계속 질문합니다.`,
};

export const experience = [
  {
    company: "우성 오토콘",
    companyUrl: "https://example.com",
    role: "백엔드 엔지니어",
    period: "2023.03 ~ 현재",
    isCurrent: true,
    description:
      "MES 및 ERP 시스템 개발과 유지보수, 스마트 팩토리 설비 제어 서버 개발을 담당",
    techStack: ["Spring Boot", "Java", "JPA", "MySQL", "Kafka"],
    achievements: [
      {
        title: "COFAS Pallet Inserter System Server 개발",
        description:
          "Pallet Inserter 및 물류 이송 라인을 통합 제어하는 실시간 설비 제어 서버를 설계 및 개발하고, 러시아 현장에 약 1억 원 규모로 상용 납품",
      },
      {
        title: "WSA MES/ERP 개발 및 유지보수",
        description:
          "생산·재고·구매 도메인 중심 MES/ERP 시스템의 기능 개발과 유지보수를 수행하며 운영 안정성과 업무 효율 향상에 기여",
      },
      {
        title: "자사 MES/ERP 서비스 MSA 전환",
        description:
          "기존 자사 MES/ERP 서비스를 MSA 구조로 전환하며 서비스 간 경계를 재정의하고 확장성과 운영 효율 개선에 기여",
      },
    ],
  },
];

export const companyProjects = [
  {
    title: "COFAS Pallet Inserter System Server",
    period: "2023.07 ~ 2023.10",
    teamSize: "서버 개발",
    description:
      "스마트 팩토리 환경에서 Pallet Inserter, Conveyor, Robot Stopper Arm, Pusher를 통합 제어하는 실시간 설비 제어 서버 개발",
    techStack: ["Java 8", "Spring Boot 2.6.7", "Maven", "OMRON FINS", "TCP/IP"],
    links: {
      github: "",
      live: "",
    },
    highlights: [
      "PLC 통신 계층과 공정 제어 계층을 분리해 안정성과 유지보수성 확보",
      "상태 머신 기반 Control Runner 구조로 설비별 제어 로직 표준화",
      "러시아 수출 프로젝트에 적용되어 약 1억 원 규모로 상용 납품",
    ],
  },
  {
    title: "WSA MES/ERP 개발",
    period: "2024.03 ~ 2024.12",
    teamSize: "백엔드 개발",
    description:
      "생산, 재고, 구매 도메인을 포함한 MES/ERP 시스템 개발과 구조 개선을 수행하며 운영 시스템을 고도화",
    techStack: [
      "Java 21",
      "Spring Boot 3.2",
      "JPA",
      "Querydsl",
      "MySQL",
      "Kafka",
    ],
    links: {
      github: "",
      live: "",
    },
    highlights: [
      "영업, 생산, 재고, 구매 도메인 전반의 모듈을 설계하고 핵심 기능을 개발해 운영 흐름을 고도화",
      "프로젝트·아이템·공정 중심의 생산 흐름을 설계하고, Command/Query 분리 구조와 Querydsl 기반 조회 API로 유지보수성을 개선",
      "재고 처리 로직을 afterCommit 이벤트 방식으로 분리해 운영 안정성과 동시성 안정성을 확보",
    ],
  },
  {
    title: "WSA MSA 인프라 전환",
    period: "2025.02 ~ 2025.09",
    teamSize: "아키텍처 및 공통 인프라 개발",
    description:
      "기존 자사 MES/ERP 서비스를 MSA 구조로 전환하며 Gateway, Auth, EMS, LMS 및 공통 인프라를 구축",
    techStack: [
      "Java 21/25",
      "Spring Boot 3.x/4.x",
      "Redis",
      "Consul",
      "Kafka",
      "Docker Compose",
    ],
    links: {
      github: "",
      live: "",
    },
    highlights: [
      "서비스 간 데이터 정합성을 고려한 Outbox + Kafka Connect CDC 기반 동기화 구조를 구축",
      "Gateway 전역 인증 필터와 동적 라우팅 체계를 구성해 공통 진입 정책을 표준화",
      "GitHub Actions와 Docker Compose 기반 배포 자동화 및 개발 환경 표준화로 운영 효율을 높임",
    ],
  },
];

export const personalProjects = [
  {
    title: "POUG",
    period: "2022.03 ~ 2022.04",
    teamSize: "팀 프로젝트 · 백엔드 개발",
    description:
      "GitHub 기반으로 개발자 포트폴리오와 프로젝트를 작성·공유할 수 있는 서비스의 백엔드 개발에 참여하며, 카카오 로그인, 북마크, 프로젝트 API와 배포 자동화를 담당",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA",
      "Querydsl",
      "MySQL",
      "AWS EC2",
      "Nginx",
      "GitHub Actions",
    ],
    links: {
      github: "https://github.com/h99-final/one-page-resume-BE",
      live: "https://poug.me/",
    },
    highlights: [
      "카카오 로그인 API를 구현하고 북마크, 프로젝트 관련 API를 개발해 핵심 사용자 기능을 지원",
      "GitHub Actions, Nginx, HTTPS 구성을 바탕으로 무중단 배포 환경을 구축해 운영 안정성을 개선",
      "팀 프로젝트 환경에서 백엔드 기능 개발과 운영 환경 구성을 함께 맡아 서비스 완성도와 운영 효율을 높임",
    ],
  },
  {
    title: "PickBit",
    period: "기간 업데이트 예정",
    teamSize: "개인 프로젝트",
    description:
      "입찰과 실시간 경쟁 경험에 초점을 맞춘 경매 플랫폼을 직접 설계하고 개발하며, 여러 사용자가 동시에 참여하는 환경에서도 안정적으로 동작할 수 있도록 상품 등록부터 경매 진행, 낙찰 흐름까지 구현",
    techStack: [
      "Java",
      "Spring Boot",
      "JPA",
      "MySQL",
      "Redis",
      "WebSocket",
    ],
    links: {
      github: "https://github.com/pickbit-dev",
      live: "",
    },
    highlights: [
      "상품 등록, 경매 생성, 입찰, 낙찰까지 이어지는 핵심 경매 흐름을 서비스 관점에서 설계",
      "실시간 입찰 상태 변화와 사용자 상호작용을 고려해 많은 사용자가 동시에 참여할 수 있는 경매 진행 경험을 구현",
      "동시 입찰 상황에서도 정합성이 유지되도록 동시성 문제를 고려한 처리 구조를 설계",
    ],
  },
];

export const education = [
  {
    name: "백석대학교",
    major: "컴퓨터공학부 학사",
    period: "2015.03 ~ 2021.02",
    note: "전체 학점: 3.7 / 4.5",
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
  Languages: ["Java", "SQL", "Kotlin"],
  Backend: ["Spring Boot", "JPA", "Querydsl", "MySQL", "Kafka", "MongoDB", "Redis", "Elasticsearch"],
  Infra: ["Consul", "Docker Compose", "GitHub Actions", "Flyway"],
  Cloud: ["AWS", "Supabase"],
};
