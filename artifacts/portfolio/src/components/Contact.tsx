import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Contact" alignment="center" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 rounded-3xl mt-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Let's build something great together.</h3>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            I'm currently open to new opportunities in Bangalore or remote roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all duration-300 mb-12"
          >
            <Send size={18} />
            Say Hello
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
            <a href={`mailto:${portfolioData.personal.email}`} className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={20} />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">{portfolioData.personal.email}</span>
            </a>
            
            <a href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`} className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone size={20} />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">{portfolioData.personal.phone}</span>
            </a>

            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">LinkedIn Profile</span>
            </a>

            <div className="flex flex-col items-center gap-3 group cursor-default">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <span className="text-sm font-medium text-muted-foreground">{portfolioData.personal.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
