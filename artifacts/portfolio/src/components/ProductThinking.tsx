import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";

export function ProductThinking() {
  return (
    <section id="thinking" className="section-padding border-y border-border bg-muted/30">
      <div className="container-wide">
        <SectionHeading
          label="Thinking"
          title="How I approach product decisions"
          description="Frameworks and practices I use to reduce ambiguity, align stakeholders, and ship with intent."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.productThinking.map((item, index) => (
            <FadeIn key={item.title} delay={index * 70}>
              <article className="h-full rounded-lg border border-border bg-background p-6 md:p-8">
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.description}
                </p>
                <ul className="space-y-2 border-t border-border pt-5">
                  {item.examples.map((example) => (
                    <li
                      key={example}
                      className="text-sm text-foreground before:mr-2 before:text-muted-foreground before:content-['—']"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
