/**
 * Framer Motion Animation Presets
 * Premium, cinematic animation utilities
 */

// Smooth easing curve for premium feel
export const premiumEase = [0.16, 1, 0.3, 1];

// Standard transition durations (ms)
export const duration = {
  slow: 0.8,
  normal: 0.6,
  fast: 0.3,
};

/**
 * Container variants for staggered animations
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/**
 * Fade up with blur-to-sharp effect
 */
export const fadeUpBlur = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(10px)',
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: duration.normal,
      delay: i * 0.1,
      ease: premiumEase,
    },
  }),
};

/**
 * Scale fade in (for elements appearing)
 */
export const scaleFadeIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.slow,
      ease: premiumEase,
    },
  },
};

/**
 * Hero entrance - slow, cinematic reveal
 */
export const heroEntrance = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(15px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: duration.slow,
      delay: 0.3,
      ease: premiumEase,
    },
  },
};

/**
 * Section heading entrance
 */
export const sectionHeading = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: premiumEase,
    },
  },
};

/**
 * Card hover effects
 */
export const cardHover = {
  rest: {
    y: 0,
    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))',
  },
  hover: {
    y: -8,
    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
    transition: {
      duration: duration.fast,
      ease: premiumEase,
    },
  },
};

/**
 * Subtle parallax effect
 */
export const parallaxScroll = (offset = 50) => ({
  y: [0, offset],
  transition: {
    duration: 0.5,
  },
});

/**
 * Scroll-triggered animations
 * Use with whileInView in Motion component
 */
export const scrollReveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: premiumEase,
    },
  },
};

export const scrollRevealStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/**
 * Viewport configuration for scroll animations
 */
export const viewportConfig = {
  once: true,
  margin: '-100px',
  amount: 0.3,
};

/**
 * Background animation (subtle, continuous)
 */
export const floatingAnimation = {
  animate: {
    y: [0, 20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/**
 * Gradient blob animation
 */
export const blobAnimation = {
  animate: {
    x: [0, 100, -50, 0],
    y: [0, 50, -100, 0],
    scale: [1, 1.2, 0.9, 1],
    opacity: [0.5, 0.8, 0.6, 0.5],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
