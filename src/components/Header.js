'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import { mapper } from '@/helpers/mapper';

const CustomHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const headerData = mapper('header');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const opacity = Math.min(1, scrollPosition / 50);

  const headerStyle = {
    background: `linear-gradient(135deg, rgba(15, 23, 42, ${0.7 + opacity * 0.3}) 0%, rgba(30, 41, 59, ${0.7 + opacity * 0.3}) 100%)`,
    backdropFilter: 'blur(10px)',
    borderBottomColor: `rgba(124, 101, 216, ${opacity * 0.3})`
  };

  return (
    <header 
      className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent"
      style={headerStyle}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="transition-smooth group">
          <span className="text-xl md:text-2xl font-bold gradient-text">{headerData.logo}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {headerData.navigation.map((item) => (
            <CustomLink key={item.href} href={item.href} desc={item.label} />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 w-6 h-6 group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span className={`w-full h-0.5 bg-primary transition-smooth origin-center ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-full h-0.5 bg-accent transition-smooth ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-full h-0.5 bg-primary transition-smooth origin-center ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-primary/20 animate-slide-down">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-2 flex flex-col">
            {headerData.navigation.map((item) => (
              <CustomLink key={item.href} href={item.href} desc={item.label} mobile />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

const CustomLink = ({ href, desc, mobile = false }) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <div>
      <Link
        href={href}
        className={`
          flex items-center px-3 py-2 rounded-lg font-medium transition-smooth
          ${mobile ? 'w-full' : ''}
          ${
            isActive
              ? 'text-white bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/50'
              : 'text-gray-300 hover:text-white hover:bg-primary/10 border border-transparent'
          }
        `}
      >
        <span>{desc}</span>
        {isActive && (
          <span className="ml-2 w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        )}
      </Link>
    </div>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string,
  desc: PropTypes.string,
  mobile: PropTypes.bool
};

export default CustomHeader;
