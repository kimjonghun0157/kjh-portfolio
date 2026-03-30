export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print pb-10 pt-6">
      <div className="mx-auto max-w-[960px] px-6 md:px-8">
        <div className="glass-panel flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] px-6 py-5 text-xs text-ink-light">
          <p>&copy; {year} 김종훈. Crafted with a warm editorial touch.</p>
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
