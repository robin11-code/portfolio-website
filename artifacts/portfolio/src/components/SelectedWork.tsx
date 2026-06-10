import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";

export function SelectedWork() {
  return (
    <section id="work" className="section-padding border-y border-border bg-muted/30">
      <div className="container-wide">
        <SectionHeading
          label="Work"
          title="Selected product work"
          description="Case studies framed around problems, decisions, and measurable outcomes—not feature lists."
        />

        <div className="space-y-8 md:space-y-10">
          {portfolioData.caseStudies.map((study, index) => (
            <FadeIn key={study.title} delay={index * 80}>
              <article className="rounded-lg border border-border bg-background p-6 md:p-8">
                <div className="mb-6 flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{study.company}</p>
                </div>

                <dl className="grid gap-6 md:grid-cols-2 md:gap-8">
                  <div>
                    <dt className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Problem
                    </dt>
                    <dd className="text-sm leading-relaxed text-foreground md:text-base">
                      {study.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Approach
                    </dt>
                    <dd className="text-sm leading-relaxed text-foreground md:text-base">
                      {study.approach}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Outcome
                    </dt>
                    <dd className="text-sm leading-relaxed text-foreground md:text-base">
                      {study.outcome}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      My role
                    </dt>
                    <dd className="text-sm leading-relaxed text-foreground md:text-base">
                      {study.role}
                    </dd>
                  </div>
                </dl>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
