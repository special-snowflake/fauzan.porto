import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

/**
 * Monochrome social/contact glyphs.
 * The brand SVGs are tinted to pure black (or white) with a filter — never
 * chromatic, per the "interface never picks up a hue" rule.
 * `unoptimized` keeps next/image from running the optimizer over SVG sources.
 */
const Icon = ({ type, size = 18, tone = 'dark' }) => {
  const iconMap = {
    linkedin: '/assets/icons/linkedin.svg',
    github: '/assets/icons/github.svg',
    email: '/assets/icons/email.svg',
    discord: '/assets/icons/discord.svg',
    dribbble: '/assets/icons/dribbble.svg',
    facebook: '/assets/icons/facebook.svg',
    instagram: '/assets/icons/instagram.svg',
    line: '/assets/icons/line.svg',
    medium: '/assets/icons/medium.svg',
    pinterest: '/assets/icons/pinterest.svg',
    reddit: '/assets/icons/reddit.svg',
    telegram: '/assets/icons/telegram.svg',
    twitter: '/assets/icons/twitter.svg',
    whatsapp: '/assets/icons/whatsapp.svg'
  };

  const src = iconMap[type];
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={type}
      width={size}
      height={size}
      unoptimized
      style={{
        width: size,
        height: size,
        filter: tone === 'light' ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%)'
      }}
    />
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  tone: PropTypes.oneOf(['dark', 'light'])
};

export default Icon;
