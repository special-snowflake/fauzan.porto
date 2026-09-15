'use client';

import { useEffect, useRef } from 'react';

const InteractiveGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!grid || reduceMotion.matches) {
      return undefined;
    }

    let frameId = null;
    let targetX = 50;
    let targetY = 42;
    let currentX = targetX;
    let currentY = targetY;

    const updateGrid = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      grid.style.setProperty('--grid-x', `${currentX}%`);
      grid.style.setProperty('--grid-y', `${currentY}%`);
      frameId = requestAnimationFrame(updateGrid);
    };

    const handlePointerMove = (event) => {
      targetX = (event.clientX / window.innerWidth) * 100;
      targetY = (event.clientY / window.innerHeight) * 100;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    frameId = requestAnimationFrame(updateGrid);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return <div ref={gridRef} className="interactive-grid" aria-hidden="true" />;
};

export default InteractiveGrid;