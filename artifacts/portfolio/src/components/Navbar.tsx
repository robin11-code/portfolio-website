import { useEffect, useState } from "react";
import { portfolioData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ResumeLink } from "@/components/ResumeLink";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Thinking", href: "#thinking" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        isScrolled
          ? "border-border bg-background/95 backdrop-blur-sm"
          : "border-transparent bg-background",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-accent"
        >
          {portfolioData.personal.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <ResumeLink label="Resume" location="nav" variant="nav" />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-transform",
                mobileOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-opacity",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-current transition-transform",
                mobileOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border bg-background px-5 py-6 md:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-base text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <ResumeLink
                label="Resume"
                location="nav-mobile"
                variant="nav-mobile"
                onNavigate={() => setMobileOpen(false)}
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
