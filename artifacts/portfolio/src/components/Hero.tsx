import { portfolioData } from "@/lib/data";
import { ResumeLink } from "@/components/ResumeLink";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-padding border-b border-border pt-28 md:pt-36"
    >
      <div className="container-wide">
        <div className="max-w-3xl fade-in">
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            {portfolioData.personal.title} · {portfolioData.personal.location}
          </p>

          <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl md:leading-[1.15]">
            {portfolioData.personal.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {portfolioData.personal.valueProposition}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#work"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Work
            </a>
            <ResumeLink
              label="Download Resume"
              location="hero"
              variant="hero"
            />
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
