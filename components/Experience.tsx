import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <div id="experience" className="mb-16 scroll-mt-24">
      <h3 className="mb-8 text-xl font-bold tracking-tight text-ink">
        개발 경력
      </h3>

      <div className="relative space-y-10 pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
        {experience.map((job, idx) => (
          <article key={idx} className="animate-slide-up relative" style={{ animationDelay: `${idx * 0.12}s` }}>
            {/* 타임라인 도트 */}
            <div
              className={`absolute -left-6 top-[6px] h-3 w-3 rounded-full border-2 ${
                job.isCurrent
                  ? "border-accent bg-accent"
                  : "border-ink-light bg-surface"
              }`}
            />

            {/* 헤더 */}
            <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-ink transition-colors hover:text-accent"
              >
                {job.company}
              </a>
              {job.isCurrent && (
                <span className="inline-flex items-center rounded-full bg-accent-surface px-2 py-0.5 text-xs font-medium text-accent">
                  현재 재직중
                </span>
              )}
            </div>

            <p className="mb-1 text-sm text-ink-muted">
              {job.role} · {job.team}
            </p>
            <p className="mb-3 text-xs text-ink-light">{job.period}</p>

            <p className="mb-4 text-sm leading-relaxed text-ink-muted">
              {job.description}
            </p>

            {/* 기술 스택 */}
            <div className="mb-4 flex flex-wrap gap-1.5">
              {job.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-surface-alt px-2 py-0.5 text-xs font-medium text-ink-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 성과 */}
            <ul className="space-y-3">
              {job.achievements.map((item, i) => (
                <li key={i} className="text-sm">
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
