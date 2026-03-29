import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";
import { portfolioData } from "@/lib/data";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-white/5 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">Currently Product Owner at Repurpose.io</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Hi, I'm <span className="text-gradient">{portfolioData.personal.name}</span><br/>
              {portfolioData.personal.title.split(' / ')[0]}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              {portfolioData.personal.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin size={16} className="text-primary"/> {portfolioData.personal.location}</div>
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={16} className="text-primary"/> Email Me</a>
              <div className="flex items-center gap-2"><Phone size={16} className="text-primary"/> {portfolioData.personal.phone}</div>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors"><Linkedin size={16} className="text-primary"/> LinkedIn</a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Hire Me
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 rounded-xl font-semibold bg-secondary text-white border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={24} className="hover:text-primary transition-colors cursor-pointer" />
        </a>
      </motion.div>
    </section>
  );
}
