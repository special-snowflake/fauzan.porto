'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mapper } from '@/helpers/mapper';

/**
 * Top Navigation Bar — fixed transparent 66px header.
 * Wordmark left, menu right. No background fill, no shadow, no sticky colour shift:
 * `mix-blend-mode: difference` (see .site-header) keeps type legible over both the
 * iridescent hero and the white editorial sections.
 */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const headerData = mapper('header');

  // Close the mobile stack on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="link-plain site-header__wordmark" aria-label={headerData.logo}>
            {headerData.logo}
          </Link>

          <nav className="site-header__nav" aria-label="Primary">
            {headerData.navigation.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <button
            type="button"
            className="site-header__toggle"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="site-header__bar" />
            <span className="site-header__bar" />
          </button>
        </div>
      </header>

      {isOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile">
          {headerData.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="link-plain mobile-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

const NavLink = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="link-plain site-header__link"
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  );
};

export default Header;
