import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { timeline } from "../data/experience";
import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import { groupVariants, itemVariants } from "../ui/Stagger";

export function Experience() {
  return (
    <AnimatedSection id="experience">
      <SectionHeading index="04" title="Education" />

      <motion.ol
        variants={groupVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative ml-3 space-y-10 border-l border-gold/20 pl-8"
      >
        {timeline.map((entry) => (
          <motion.li
            key={`${entry.org}-${entry.title}`}
            variants={itemVariants}
            className="relative"
          >
            <span className="absolute -left-[2.85rem] flex h-7 w-7 items-center justify-center rounded-full border border-gold/30 bg-surface text-gold">
              <GraduationCap size={14} />
            </span>

            <p className="font-mono text-xs text-gold">{entry.period}</p>
            <h3 className="mt-1 font-mono text-lg font-bold text-content">
              {entry.title}
            </h3>
            <p className="text-sm text-muted">{entry.org}</p>

            <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed text-muted marker:text-gold/50">
              {entry.details.map((detail) => (
                <li key={detail.slice(0, 24)}>{detail}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ol>
    </AnimatedSection>
  );
}
