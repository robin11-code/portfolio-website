import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading title="Profile Summary" subtitle="About Me" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-invert prose-lg text-muted-foreground"
            >
              <p className="leading-relaxed">
                {portfolioData.personal.summary}
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-panel p-6 rounded-2xl">
              <div className="text-4xl font-display font-bold text-primary mb-2">7+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <div className="text-4xl font-display font-bold text-primary mb-2">4</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Companies</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl col-span-2">
              <div className="text-4xl font-display font-bold text-white mb-2 text-gradient">20%+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Average Timeline Reduction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
