import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SelectedWork } from "@/components/SelectedWork";
import { Experience } from "@/components/Experience";
import { ProductThinking } from "@/components/ProductThinking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <ProductThinking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
