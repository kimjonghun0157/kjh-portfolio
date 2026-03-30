import { education, certificates } from "@/data/portfolio";

export default function Education() {
  return (
    <div className="mb-16">
      <h3 className="mb-6 text-xl font-bold tracking-tight text-ink">학력</h3>
      <div className="mb-10 space-y-4">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="soft-card print-avoid flex flex-wrap items-baseline justify-between gap-2 rounded-[1.25rem] p-5"
          >
            <div>
              <p className="font-semibold text-ink">{edu.name}</p>
              <p className="mt-0.5 text-sm text-ink-muted">{edu.major}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-ink-muted">{edu.period}</p>
              {edu.note && (
                <p className="mt-0.5 text-xs text-ink-light">{edu.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/*<h3 className="mb-6 text-xl font-bold tracking-tight text-ink">*/}
      {/*  자격증*/}
      {/*</h3>*/}
      {/*<div className="space-y-3">*/}
      {/*  {certificates.map((cert, idx) => (*/}
      {/*    <div*/}
      {/*      key={idx}*/}
      {/*      className="soft-card flex flex-wrap items-baseline justify-between gap-2 rounded-[1.25rem] p-5"*/}
      {/*    >*/}
      {/*      <div>*/}
      {/*        <p className="text-sm font-semibold text-ink">{cert.name}</p>*/}
      {/*        <p className="mt-0.5 text-xs text-ink-muted">{cert.issuer}</p>*/}
      {/*      </div>*/}
      {/*      <div className="text-right">*/}
      {/*        <p className="text-xs text-ink-light">{cert.date}</p>*/}
      {/*        {cert.note && (*/}
      {/*          <p className="text-xs font-medium text-accent">{cert.note}</p>*/}
      {/*        )}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
}
