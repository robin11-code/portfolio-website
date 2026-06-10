import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    value: portfolioData.personal.email,
    href: `mailto:${portfolioData.personal.email}`,
  },
  {
    label: "Phone",
    value: portfolioData.personal.phone,
    href: `tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/robin96",
    href: portfolioData.personal.linkedin,
    external: true,
  },
  {
    label: "Location",
    value: portfolioData.personal.location,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          label="Contact"
          title="Let's connect"
          description="Open to product and business analysis roles in Bangalore and remote. Reach out directly—I respond to thoughtful messages."
        />

        <FadeIn delay={100}>
          <ul className="divide-y divide-border border-y border-border">
            {contactLinks.map((item) => (
              <li key={item.label} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="text-base text-foreground transition-colors hover:text-accent"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-base text-foreground">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-12 space-y-2 text-sm text-muted-foreground">
            <p>{portfolioData.credentials.certification}</p>
            <p>{portfolioData.credentials.recognition}</p>
            <p>
              {portfolioData.credentials.education
                .map((e) => `${e.degree}, ${e.school} (${e.year})`)
                .join(" · ")}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
