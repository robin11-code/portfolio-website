import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education & Achievements" subtitle="Academic Background" alignment="center" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h3 className="text-2xl font-display font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
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

          {/* Achievements & Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-primary" size={28} />
              <h3 className="text-2xl font-display font-bold text-white">Milestones</h3>
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl"
              >
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Certifications</h4>
                {portfolioData.certifications.map((cert, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-white">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-primary">{cert.year}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-panel p-6 rounded-2xl"
              >
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">Key Achievements</h4>
                <ul className="space-y-4">
                  {portfolioData.achievements.map((achieve, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                      <Award size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{achieve}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
