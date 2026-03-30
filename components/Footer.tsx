export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print border-t border-border">
      <div className="mx-auto max-w-[860px] px-6 py-8 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-ink-light">
          <p>&copy; {year} 홍길동. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
            >
              Next.js
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
