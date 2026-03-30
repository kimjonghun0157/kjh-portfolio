"use client";

import { profile } from "@/data/portfolio";

export default function Profile() {
  return (
    <div className="animate-fade-in mb-16 print-profile">
      <div className="mb-8 border-b border-border/80 pb-8 print-profile-header">
        <div>
          <h1 className="section-title mb-4 text-ink">김종훈</h1>
          <p className="mb-5 text-base font-medium uppercase tracking-[0.24em] text-ink-light print-name-en">
            {profile.nameEn}
          </p>
        </div>
      </div>

      <div className="mb-6 print-profile-bio">
        <div>
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink-muted md:text-base">
            {profile.bio}
          </p>
        </div>
      </div>

      <div className="soft-card print-avoid mb-8 rounded-[1.5rem] p-5 text-sm md:p-6">
        <div className="print-contact-heading mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-light">
            Contact
          </p>

          <div className="print-social-links flex gap-3">
            {profile.github && (
              <SocialLink href={profile.github} label="GitHub">
                <GitHubIcon />
              </SocialLink>
            )}
            {profile.linkedin && (
              <SocialLink href={profile.linkedin} label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
            )}
            {profile.blog && (
              <SocialLink href={profile.blog} label="Blog">
                <BlogIcon />
              </SocialLink>
            )}
          </div>
        </div>

        <div className="print-contact-grid grid gap-x-6 gap-y-3 md:grid-cols-2 xl:grid-cols-3">
          <ContactItem label="이메일" href={`mailto:${profile.email}`}>
            {profile.email}
          </ContactItem>
          <ContactItem label="전화" href={`tel:${profile.phone}`}>
            {profile.phone}
          </ContactItem>
          <ContactItem label="생년월일">{profile.birth}</ContactItem>
          <ContactItem label="성별">{profile.gender}</ContactItem>
          <ContactItem label="국적">{profile.nationality}</ContactItem>
          <ContactItem label="병역">{profile.military}</ContactItem>
          <ContactItem label="취미">{profile.hobbies}</ContactItem>
          <ContactItem label="거주지">{profile.location}</ContactItem>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  label,
  href,
  children,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="print-contact-item grid gap-1.5 rounded-[1rem] border border-border/50 bg-white/35 px-4 py-3 sm:grid-cols-[88px_minmax(0,1fr)] sm:items-start sm:gap-3">
      <span className="text-xs font-medium uppercase tracking-[0.22em] text-ink-light sm:pt-0.5">
        {label}
      </span>
      <div>
        {href ? (
          <a
            href={href}
            className="break-words text-sm font-medium text-ink transition-colors hover:text-accent"
          >
            {children}
          </a>
        ) : (
          <span className="break-words text-sm font-medium text-ink">{children}</span>
        )}
      </div>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/60 text-ink-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent-surface hover:text-accent"
    >
      {children}
    </a>
  );
}

/* ─── 아이콘 (인라인 SVG) ─── */

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function BlogIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  );
}
