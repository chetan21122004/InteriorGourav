import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode, Children, cloneElement, ReactElement } from "react";

interface StaggerAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: "fadeUp" | "scale" | "slideUp";
  duration?: number;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  slideUp: {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }
};

export const StaggerAnimation = ({
  children,
  className = "",
  staggerDelay = 0.1,
  animation = "fadeUp",
  duration = 0.5,
  once = true
}: StaggerAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  const childrenArray = Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants[animation]}
          transition={{
            duration,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
