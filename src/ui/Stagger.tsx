import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";

export const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGroup({ children, className = "" }: StaggerProps) {
  return (
    <motion.div
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: StaggerProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
