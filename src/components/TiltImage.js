'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

/**
 * Feature portrait with a slow 3D pointer tilt. Rotation stays within +/-4deg
 * and eases with the DESIGN.md glide curve cubic-bezier(0.19,1,0.22,1) over
 * 1.25s — patient, never snappy. Disabled under reduced-motion.
 */
const TiltImage = ({ src, alt, priority = false }) => {
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e) => {
    const b = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width;
    const py = (e.clientY - b.top) / b.height;
    setTilt({ rx: (0.5 - py) * 8, ry: (px - 0.5) * 8 });
  };

  return (
    <motion.div
      onPointerMove={reduce ? undefined : onMove}
      onPointerLeave={() => setTilt({ rx: 0, ry: 0 })}
      animate={reduce ? { rotateX: 0, rotateY: 0 } : { rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ duration: 1.25, ease: [0.19, 1, 0.22, 1] }}
      style={{
        position: 'relative',
        aspectRatio: '4 / 5',
        overflow: 'hidden',
        background: 'var(--surface-ash-mist)',
        transformPerspective: 1100,
        willChange: 'transform'
      }}
    >
      <Image
        src={src}
        fill
        sizes="(max-width: 768px) 100vw, 520px"
        alt={alt}
        className="project-row__img"
        priority={priority}
      />
    </motion.div>
  );
};

export default TiltImage;
