import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <div id="skills" className="mb-16 scroll-mt-24">
      <h3 className="mb-8 text-xl font-bold tracking-tight text-ink">
        기술 스택
      </h3>

      <div className="print-skills-grid grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="soft-card print-avoid rounded-[1.5rem] p-5 md:p-6">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-ink-light">
              {category}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="warm-chip rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
