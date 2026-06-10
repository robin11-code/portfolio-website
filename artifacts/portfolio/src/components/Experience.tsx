import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          label="Experience"
          title="Career timeline"
          description="Impact and outcomes from each role—not a list of daily tasks."
        />

        <ol className="relative border-l border-border pl-6 md:pl-8">
          {portfolioData.experience.map((job, index) => (
            <FadeIn key={`${job.company}-${job.period}`} delay={index * 60}>
              <li className="relative pb-12 last:pb-0">
                <span
                  className="absolute -left-[1.625rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent md:-left-[2.125rem]"
                  aria-hidden
                />

                <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <time className="text-sm text-muted-foreground">{job.period}</time>
                </div>

                <p className="mb-4 text-sm font-medium text-muted-foreground">
                  {job.company}
                </p>

                <ul className="space-y-2">
                  {job.impacts.map((impact) => (
                    <li
                      key={impact}
                      className="text-sm leading-relaxed text-foreground md:text-base"
                    >
                      {impact}
                    </li>
                  ))}
                </ul>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
