import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills & Expertise" subtitle="What I Bring" alignment="center" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          
          {/* Core Competencies */}
          <div className="glass-panel p-8 rounded-3xl">
            <h3 className="text-2xl font-display font-bold mb-6 text-white">Core Competencies</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {portfolioData.competencies.map((skill, i) => (
                <motion.span 
                  key={i}
                  variants={item}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary/80 border border-white/5 text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-secondary transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Technical Skills grouped */}
          <div className="space-y-8">
            {portfolioData.technicalSkills.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded bg-background border border-border text-sm text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center">
          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">Leadership & Soft Skills</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.softSkills.map((skill, i) => (
              <span key={i} className="text-base text-white/80 font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
