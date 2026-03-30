import { companyProjects, personalProjects } from "@/data/portfolio";

type Project = {
  title: string;
  period: string;
  teamSize: string;
  description: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
  };
  highlights: string[];
};

export default function Projects() {
  const [featuredProject, ...otherCompanyProjects] = companyProjects;

  return (
    <div id="projects" className="scroll-mt-24">

      <div className="space-y-14">
        <section>
          <div className="mb-8">
            <p className="section-label mb-3">Company Projects</p>
            <h4 className="text-2xl font-semibold tracking-tight text-ink">
              회사 프로젝트
            </h4>
          </div>

          <div className="space-y-8">
            {featuredProject && <FeaturedProjectCard project={featuredProject} />}

            {otherCompanyProjects.length > 0 && (
               <div className="print-project-grid grid gap-6 md:grid-cols-2">
                {otherCompanyProjects.map((project, idx) => (
                  <ProjectCard key={project.title} project={project} delay={idx + 1} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section>
          <div className="mb-8">
            <p className="section-label mb-3">Personal Projects</p>
            <h4 className="text-2xl font-semibold tracking-tight text-ink">
              개인 프로젝트
            </h4>
          </div>

          <div className="print-project-grid grid gap-6 md:grid-cols-2">
            {personalProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} delay={idx + 1} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="animate-slide-up group soft-card print-avoid print-project-card overflow-hidden rounded-[1.75rem] p-6 md:p-8">
      <div className="print-featured-top mb-6 grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)] md:items-end">
        <div>
          <p className="section-label mb-4">Featured Project</p>
          <h4 className="print-project-title font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {project.title}
          </h4>
          <p className="print-project-description mt-3 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {project.description}
          </p>
        </div>

        <div>
          <div className="print-project-snapshot soft-card rounded-[1.5rem] p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink-light">
              Project Snapshot
            </p>
            <p className="text-sm text-ink-muted">
              {project.period} - {project.teamSize}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="warm-chip rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <ProjectLinks links={project.links} large />
        </div>
      </div>

      <ul className="print-featured-highlights grid gap-3 md:grid-cols-2">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="print-project-highlight rounded-2xl border border-border/80 bg-white/55 px-4 py-3 text-sm text-ink-muted"
          >
            <span className="mb-2 block h-1.5 w-10 rounded-full bg-accent/55" />
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <article
      className="animate-slide-up group soft-card print-avoid print-project-card rounded-[1.5rem] p-6 transition-all hover:-translate-y-1 hover:border-accent/35"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="print-project-head mb-3">
        <div>
          <h4 className="print-project-title text-xl font-semibold text-ink">{project.title}</h4>
          <p className="print-project-meta mt-1 text-xs uppercase tracking-[0.18em] text-ink-light">
            {project.period} · {project.teamSize}
          </p>
        </div>
      </div>

      <ProjectLinks links={project.links} />

      <p className="print-project-description mb-4 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <div className="print-project-tech mb-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="warm-chip rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="print-project-points space-y-2">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm text-ink-muted">
            <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/55" />
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}

function ProjectLinks({
  links,
  large = false,
}: {
  links: Project["links"];
  large?: boolean;
}) {
  if (!links.github && !links.live) {
    return null;
  }

  const buttonClass = large
    ? "rounded-full px-4 py-2 text-sm font-medium"
    : "rounded-full px-3 py-1.5 text-xs font-medium";
  const wrapperClass = large ? "mb-5 flex flex-wrap gap-2" : "flex flex-wrap gap-2";

  return (
    <div className={wrapperClass}>
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
            className={`print-link cta-secondary inline-flex items-center gap-1.5 ${buttonClass}`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
      )}

      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
            className={`print-link cta-primary inline-flex items-center gap-1.5 ${buttonClass}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
          {large ? "Live Preview" : "Live"}
        </a>
      )}
    </div>
  );
}
