// Animation configuration constants
export const ANIMATION_CONFIG = {
  // Durations
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 0.9,

  // Delays
  STAGGER_DELAY: 0.1,
  SEQUENCE_DELAY: 0.2,

  // Easing curves
  EASE_OUT: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  EASE_IN_OUT: [0.4, 0, 0.2, 1] as [number, number, number, number],
  BOUNCE: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],

  // Distances
  SLIDE_DISTANCE: 50,
  SLIDE_DISTANCE_LARGE: 100,

  // Scales
  SCALE_START: 0.8,
  SCALE_END: 1,

  // Viewport thresholds
  THRESHOLD_LOW: 0.1,
  THRESHOLD_MEDIUM: 0.3,
  THRESHOLD_HIGH: 0.5,
};

// Preset animation variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: ANIMATION_CONFIG.SLIDE_DISTANCE },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -ANIMATION_CONFIG.SLIDE_DISTANCE },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: ANIMATION_CONFIG.SLIDE_DISTANCE },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -ANIMATION_CONFIG.SLIDE_DISTANCE },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: ANIMATION_CONFIG.SCALE_START },
    visible: { opacity: 1, scale: ANIMATION_CONFIG.SCALE_END }
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: ANIMATION_CONFIG.STAGGER_DELAY
      }
    }
  }
};

// Transition presets
export const TRANSITION_PRESETS = {
  smooth: {
    duration: ANIMATION_CONFIG.NORMAL,
    ease: ANIMATION_CONFIG.EASE_OUT
  },
  fast: {
    duration: ANIMATION_CONFIG.FAST,
    ease: ANIMATION_CONFIG.EASE_OUT
  },
  slow: {
    duration: ANIMATION_CONFIG.SLOW,
    ease: ANIMATION_CONFIG.EASE_OUT
  },
  bounce: {
    duration: ANIMATION_CONFIG.NORMAL,
    ease: ANIMATION_CONFIG.BOUNCE
  }
};
