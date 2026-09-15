'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const transition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1]
};

const PageTransition = ({ children, routeKey = 'page' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={routeKey}
        className="page-transition-shell"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
        transition={shouldReduceMotion ? { duration: 0 } : transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;