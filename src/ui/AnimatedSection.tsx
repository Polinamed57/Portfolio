import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({
  id,
  children,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mx-auto w-full max-w-content px-6 py-20 md:px-10 md:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}
