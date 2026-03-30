import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <div id="experience" className="mb-16 scroll-mt-24">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-bold tracking-tight text-ink">개발 경력</h3>
        <span className="warm-chip rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
          총 경력 3년+
        </span>
      </div>

      <div className="print-experience-list relative space-y-6 pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
        {experience.map((job, idx) => (
          <article
            key={idx}
            className="animate-slide-up soft-card print-avoid print-experience-item relative rounded-[1.5rem] p-5 md:p-6"
            style={{ animationDelay: `${idx * 0.12}s` }}
          >
            <div
              className={`print-experience-dot absolute -left-6 top-[6px] h-3 w-3 rounded-full border-2 ${
                job.isCurrent
                  ? "border-accent bg-accent"
                  : "border-ink-light bg-surface"
              }`}
            />

            <div className="print-experience-head mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="print-experience-company text-lg font-bold text-ink transition-colors hover:text-accent"
              >
                {job.company}
              </a>
              {job.isCurrent && (
                <span className="warm-chip print-current-chip inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                  현재 재직중
                </span>
              )}
            </div>

            <p className="print-experience-role mb-1 text-sm text-ink-muted">
              {job.role}
            </p>
            <p className="print-experience-period mb-3 text-xs text-ink-light">{job.period}</p>

            <p className="print-experience-description mb-4 text-sm leading-relaxed text-ink-muted">
              {job.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {job.techStack.map((tech) => (
                <span
                  key={tech}
                  className="warm-chip rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-3">
              {job.achievements.map((item, i) => (
                <li key={i} className="print-avoid rounded-2xl border border-border/70 bg-white/55 px-4 py-3 text-sm">
                  <span className="font-semibold text-ink">
                    {item.title}
                  </span>
                  <p className="mt-0.5 leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
