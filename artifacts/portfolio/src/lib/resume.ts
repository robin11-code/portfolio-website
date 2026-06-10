export const resume = {
  path: `${import.meta.env.BASE_URL}Robin_Resume.pdf`,
  fileName: "Robin_Resume.pdf",
  title: "Robin — Product Owner Resume (PDF)",
} as const;

export type ResumeClickLocation = "hero" | "nav" | "nav-mobile";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> },
    ) => void;
  }
}

/** Fires if gtag or Plausible is present on the page. No-op otherwise. */
export function trackResumeDownload(location: ResumeClickLocation): void {
  window.gtag?.("event", "resume_download", {
    event_category: "engagement",
    event_label: location,
  });

  window.plausible?.("Resume Download", {
    props: { location },
  });
}
