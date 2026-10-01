'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

// DESIGN.md motion personality: expressive but unhurried, glide curve at 0.8s.
const transition = {
  duration: 0.8,
  ease: [0.19, 1, 0.22, 1]
};

const PageTransition = ({ children, routeKey = 'page' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={routeKey}
        className="page-shell"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
        transition={shouldReduceMotion ? { duration: 0 } : transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
