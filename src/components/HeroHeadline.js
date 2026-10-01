'use client';

import { motion, useReducedMotion } from 'motion/react';

/**
 * Hero display headline with a gentle 3D entrance — rotates in on the X axis
 * from a slight tilt, using the DESIGN.md glide curve cubic-bezier(0.19,1,0.22,1)
 * at 1.25s. Static when reduced-motion is requested.
 */
const HeroHeadline = ({ name }) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <h1 className="display-headline" style={{ color: 'var(--color-paper)' }}>
        {name}
      </h1>
    );
  }

  return (
    <motion.h1
      className="display-headline"
      style={{ color: 'var(--color-paper)', transformPerspective: 900 }}
      initial={{ opacity: 0, y: 32, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.25, ease: [0.19, 1, 0.22, 1] }}
    >
      {name}
    </motion.h1>
  );
};

export default HeroHeadline;
