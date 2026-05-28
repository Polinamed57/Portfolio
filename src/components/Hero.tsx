import type { MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { profile } from "../data/profile";

const springConfig = { stiffness: 50, damping: 20 } as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const glowX = useSpring(useTransform(pointerX, [0, 1], [-40, 40]), springConfig);
  const glowY = useSpring(useTransform(pointerY, [0, 1], [-40, 40]), springConfig);
  const gridX = useSpring(useTransform(pointerX, [0, 1], [16, -16]), springConfig);
  const gridY = useSpring(useTransform(pointerY, [0, 1], [16, -16]), springConfig);

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    pointerX.set(event.clientX / window.innerWidth);
    pointerY.set(event.clientY / window.innerHeight);
  };

  return (
    <section
      id="hero"
      onMouseMove={handlePointerMove}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2"
      >
        <motion.div style={{ x: glowX, y: glowY }}>
          <motion.div
            animate={{
              x: [0, 90, -70, 0],
              y: [0, -60, 50, 0],
              scale: [1, 1.25, 0.85, 1],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="h-[480px] w-[480px] rounded-full bg-gold/20 blur-[120px]"
          />
        </motion.div>
      </div>
      <motion.div
        aria-hidden
        style={{ x: gridX, y: gridY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-content px-6 md:px-10"
      >
        <motion.p variants={item} className="font-mono text-sm text-gold">
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-4 font-mono text-5xl font-bold tracking-tight text-content md:text-7xl"
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          variants={item}
          className="mt-2 font-mono text-3xl font-bold tracking-tight text-muted md:text-5xl"
        >
          {profile.role}
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gold px-6 py-3 font-mono text-sm font-medium text-bg transition-colors hover:bg-gold-bright"
          >
            View my work
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-mono text-sm text-gold transition-colors hover:bg-gold/10"
          >
            <FileText size={16} />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-gold"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
