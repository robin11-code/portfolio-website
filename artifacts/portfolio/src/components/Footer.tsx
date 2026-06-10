import { portfolioData } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-wide flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {portfolioData.personal.name}
        </p>
        <p>Product Owner · Business Analysis · AI Product Management</p>
      </div>
    </footer>
  );
}
