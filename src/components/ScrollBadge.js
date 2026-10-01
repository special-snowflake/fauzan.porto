'use client';

/**
 * Rotating scroll indicator — circular SVG badge with text tracing the
 * circumference, rotating continuously at slow tempo. Typographic punctuation
 * mark, not a button: it is decorative and hidden from assistive tech.
 */
const ScrollBadge = ({ label = 'SCROLL DOWN' }) => {
  // Two passes around a r=36 circle (circumference ~226 units) fills the ring.
  const ringText = `${label} · ${label} · `;

  return (
    <div className="scroll-badge" aria-hidden="true">
      <svg className="scroll-badge__ring" viewBox="0 0 100 100" role="presentation" focusable="false">
        <defs>
          <path
            id="scroll-badge-circle"
            d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
            fill="none"
          />
        </defs>
        <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        <text
          fill="currentColor"
          fontSize="8.4"
          letterSpacing="2.6"
          style={{ fontFamily: 'var(--font-roobert)', textTransform: 'uppercase' }}
        >
          <textPath href="#scroll-badge-circle" startOffset="0">
            {ringText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default ScrollBadge;
