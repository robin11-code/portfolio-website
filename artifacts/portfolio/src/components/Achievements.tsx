import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";
import { Trophy } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Achievements" subtitle="Recognition" alignment="center" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-1 gap-6">
          {portfolioData.achievements.map((achieve, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Trophy size={22} className="text-primary" />
              </div>
              <p className="text-base text-muted-foreground leading-relaxed pt-2">{achieve}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
