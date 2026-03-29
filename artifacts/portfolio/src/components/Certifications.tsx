import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { portfolioData } from "@/lib/data";
import { BadgeCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications" subtitle="Credentials" alignment="center" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolioData.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <BadgeCheck size={22} className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <span className="text-xs font-mono text-primary mt-2 inline-block">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
