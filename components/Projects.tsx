import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <div id="projects" className="scroll-mt-24">
      <h3 className="mb-8 text-xl font-bold tracking-tight text-ink">
        프로젝트
      </h3>

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="animate-slide-up group rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-[0_2px_20px_rgba(79,70,229,0.06)]"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* 헤더 */}
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h4 className="text-lg font-bold text-ink">{project.title}</h4>
                <p className="mt-1 text-xs text-ink-light">
                  {project.period} · {project.teamSize}
                </p>
              </div>

              {/* 링크들 */}
              <div className="flex gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-ink-muted transition-colors hover:border-ink hover:text-ink"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent-surface px-2.5 py-1 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Live
                  </a>
                )}
              </div>
            </div>

            {/* 설명 */}
            <p className="mb-4 text-sm leading-relaxed text-ink-muted">
              {project.description}
            </p>

            {/* 기술 스택 */}
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-surface-alt px-2 py-0.5 text-xs font-medium text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 하이라이트 */}
            <ul className="space-y-1.5">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-ink-muted"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/50" />
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
