import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SIZE = 420;
const springConfig = { stiffness: 120, damping: 22, mass: 0.5 } as const;

export function CursorGlow() {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX - SIZE / 2);
      y.set(event.clientY - SIZE / 2);
    };

    const updateVisibility = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const { bottom } = hero.getBoundingClientRect();
      setIsVisible(bottom <= 80);
    };

    updateVisibility();
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", updateVisibility);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ x: smoothX, y: smoothY, width: SIZE, height: SIZE }}
      className="pointer-events-none fixed left-0 top-0 z-30 hidden rounded-full bg-gold/15 blur-[120px] md:block"
    />
  );
}
