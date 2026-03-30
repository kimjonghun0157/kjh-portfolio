import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <div id="skills" className="mb-16 scroll-mt-24">
      <h3 className="mb-8 text-xl font-bold tracking-tight text-ink">
        기술 스택
      </h3>

      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-light">
              {category}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-ink-muted transition-colors hover:border-accent hover:text-accent"
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
