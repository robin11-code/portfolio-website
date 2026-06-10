import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          label="About"
          title="Product professional with an analyst's rigor"
          description="I bridge business context and delivery execution—so teams build the right thing, for the right reasons, with clear success criteria."
        />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <FadeIn delay={100}>
            <p className="text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              {portfolioData.personal.summary}
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="rounded-lg border border-border bg-muted/50 p-6 md:p-8">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Focus areas
              </h3>
              <ul className="space-y-3">
                {portfolioData.personal.focusAreas.map((area) => (
                  <li
                    key={area}
                    className="text-sm leading-relaxed text-foreground md:text-base"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
