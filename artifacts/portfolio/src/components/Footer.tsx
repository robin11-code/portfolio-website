import { portfolioData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
        <p className="text-sm text-primary/80 font-medium">
          Open to Remote & Bangalore opportunities.
        </p>
      </div>
    </footer>
  );
}
