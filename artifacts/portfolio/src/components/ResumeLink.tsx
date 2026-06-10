import { cn } from "@/lib/utils";
import {
  resume,
  trackResumeDownload,
  type ResumeClickLocation,
} from "@/lib/resume";
import { DocumentIcon } from "@/components/icons/DocumentIcon";

interface ResumeLinkProps {
  label: "Download Resume" | "Resume";
  location: ResumeClickLocation;
  variant: "hero" | "nav" | "nav-mobile";
  className?: string;
  onNavigate?: () => void;
}

const variantStyles = {
  hero:
    "h-11 rounded-md border border-border px-6 text-sm font-medium text-foreground hover:border-foreground/30 hover:bg-muted",
  nav: "h-9 rounded-md border border-border px-3.5 text-sm font-medium text-foreground hover:bg-muted",
  "nav-mobile": "text-base font-medium text-foreground hover:text-accent",
} as const;

export function ResumeLink({
  label,
  location,
  variant,
  className,
  onNavigate,
}: ResumeLinkProps) {
  const ariaLabel =
    label === "Resume"
      ? "Open Robin's resume PDF in a new tab"
      : "Download Robin's resume PDF in a new tab";

  return (
    <a
      href={resume.path}
      target="_blank"
      rel="noopener noreferrer"
      download={resume.fileName}
      aria-label={ariaLabel}
      title={resume.title}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variantStyles[variant],
        className,
      )}
      onClick={() => {
        trackResumeDownload(location);
        onNavigate?.();
      }}
    >
      <DocumentIcon className="h-4 w-4 shrink-0" />
      {label}
    </a>
  );
}
