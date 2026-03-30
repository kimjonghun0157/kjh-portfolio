"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "프로필", href: "#resume" },
  { label: "경력", href: "#experience" },
  { label: "기술", href: "#skills" },
  { label: "프로젝트", href: "#projects" },
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
      className={`no-print sticky top-4 z-50 mx-auto w-[min(960px,calc(100%-1.5rem))] transition-all duration-300 md:w-[min(960px,calc(100%-2rem))] ${
        scrolled
          ? "glass-panel rounded-full"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-5">
        <a
          href="#"
          className="flex min-w-0 items-center gap-3 transition-colors hover:text-accent"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-white/60 text-sm font-semibold text-accent shadow-sm">
            KJH
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold uppercase tracking-[0.24em] text-ink-light">
              Portfolio
            </span>
            <span className="block truncate text-base font-semibold tracking-tight text-ink">
              김종훈
            </span>
          </span>
        </a>

        <nav className="flex items-center gap-1 overflow-x-auto rounded-full border border-border/70 bg-white/50 p-1 backdrop-blur md:overflow-visible">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm text-ink-muted transition-all hover:bg-white hover:text-ink hover:shadow-sm"
            >
              {item.label}
            </a>
          ))}

        </nav>
      </div>
    </header>
  );
}
