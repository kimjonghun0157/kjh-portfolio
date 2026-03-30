"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "프로필", href: "#resume" },
  { label: "경력", href: "#experience" },
  { label: "프로젝트", href: "#projects" },
  { label: "기술", href: "#skills" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-surface/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[860px] items-center justify-between px-6 py-4 md:px-8">
        {/* 로고 / 이름 */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-ink transition-colors hover:text-accent"
        >
          홍길동
        </a>

        {/* 네비게이션 */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-ink-muted transition-colors hover:bg-surface-alt hover:text-ink"
            >
              {item.label}
            </a>
          ))}

          {/* PDF 다운로드 / 인쇄 버튼 */}
          <button
            onClick={() => window.print()}
            className="ml-3 rounded-md border border-border px-3 py-1.5 text-sm text-ink-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="이력서 인쇄"
          >
            인쇄
          </button>
        </nav>
      </div>
    </header>
  );
}
