import { profile } from "@/data/portfolio";

export default function Profile() {
  return (
    <div className="animate-fade-in mb-16">
      {/* 타이틀 영역 */}
      <div className="mb-8 border-b border-border pb-8">
        <p className="mb-3 text-sm font-medium text-accent">{profile.title}</p>
        <h1 className="mb-1 text-4xl font-black tracking-tight text-ink md:text-5xl">
          {profile.name}
        </h1>
        <p className="text-lg text-ink-muted">{profile.nameEn}</p>
      </div>

      {/* 소개 + 연락처 */}
      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <p className="mb-4 text-base leading-relaxed text-ink-muted">
            {profile.tagline}
          </p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink-muted">
            {profile.bio}
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <ContactItem label="이메일" href={`mailto:${profile.email}`}>
            {profile.email}
          </ContactItem>
          <ContactItem label="전화" href={`tel:${profile.phone}`}>
            {profile.phone}
          </ContactItem>
          <ContactItem label="거주지">{profile.location}</ContactItem>

          <div className="flex gap-3 pt-2">
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
    <div>
      <span className="text-xs font-medium uppercase tracking-wider text-ink-light">
        {label}
      </span>
      <div className="mt-0.5">
        {href ? (
          <a
            href={href}
            className="text-ink transition-colors hover:text-accent"
          >
            {children}
          </a>
        ) : (
          <span className="text-ink">{children}</span>
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-all hover:border-accent hover:text-accent"
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
