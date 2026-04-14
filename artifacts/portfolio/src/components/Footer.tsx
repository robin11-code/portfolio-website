import { portfolioData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Robin
          </a>
        </p>
      </div>
    </footer>
  );
}
