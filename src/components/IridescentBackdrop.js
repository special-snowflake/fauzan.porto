'use client';

/**
 * Iridescent hero backdrop — the only chromatic surface in the system.
 * Sage green dissolving through molten amber into deep oxblood, built as three
 * drifting, heavily-blurred radial layers so it reads as flowing liquid rather
 * than a flat gradient. Purely decorative: hidden from the accessibility tree.
 */
const IridescentBackdrop = () => (
  <div className="iridescent" aria-hidden="true">
    <span className="iridescent__layer iridescent__layer--sage" />
    <span className="iridescent__layer iridescent__layer--amber" />
    <span className="iridescent__layer iridescent__layer--oxblood" />
    <span className="iridescent__veil" />
  </div>
);

export default IridescentBackdrop;
