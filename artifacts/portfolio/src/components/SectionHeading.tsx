import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <FadeIn className="mb-12 md:mb-16">
      <div className="max-w-2xl">
        {label && (
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {label}
          </p>
        )}
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
