'use client';

import IridescentCanvas from '@/components/IridescentCanvas';

/**
 * Iridescent hero backdrop — the only chromatic surface in the system.
 *
 * Layered: the CSS .iridescent__layer spans provide a static fallback (used
 * when WebGL is unavailable or before hydration), the WebGL shader canvas
 * renders the true liquid iridescence on top of them, and the veil keeps the
 * white headline legible over the brighter sage/amber regions.
 */
const IridescentBackdrop = () => (
  <div className="iridescent" aria-hidden="true">
    <span className="iridescent__layer iridescent__layer--sage" />
    <span className="iridescent__layer iridescent__layer--amber" />
    <span className="iridescent__layer iridescent__layer--oxblood" />
    <IridescentCanvas />
    <span className="iridescent__veil" />
  </div>
);

export default IridescentBackdrop;
