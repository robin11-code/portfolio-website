import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="Academic Background" alignment="center" />

        <div className="flex items-center gap-3 mt-16 mb-8">
          <GraduationCap className="text-primary" size={28} />
          <h3 className="text-2xl font-display font-bold text-white">Degrees</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl border-l-4 border-l-primary"
            >
              <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
              <p className="text-muted-foreground mb-3">{edu.institution}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary/80 font-mono bg-primary/10 px-2 py-0.5 rounded">{edu.period}</span>
                <span className="font-semibold text-white/90">{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
