import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const ref = useRef(null);
  const { threshold = 0.1, once = true } = options;
  
  const isInView = useInView(ref, {
    once,
    amount: threshold
  });

  return { ref, isInView };
};
