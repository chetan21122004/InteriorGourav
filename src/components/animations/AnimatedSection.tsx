import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  opacity?: [number, number];
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 50,
  scale = 1,
  opacity = [0, 1]
}: AnimatedSectionProps) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: opacity[0], 
        y: y, 
        scale: scale === 1 ? undefined : scale * 0.9 
      }}
      animate={{
        opacity: isInView ? opacity[1] : opacity[0],
        y: isInView ? 0 : y,
        scale: isInView ? scale : (scale === 1 ? undefined : scale * 0.9)
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};
