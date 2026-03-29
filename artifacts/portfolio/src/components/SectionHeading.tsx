import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
          {title}
        </h2>
        <div className={`h-1 w-20 bg-primary rounded-full ${alignment === "center" ? "mx-auto" : ""}`} />
      </motion.div>
    </div>
  );
}
