'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

const CustomHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const transparency = Math.min(1, scrollPosition / 50);

  const headerStyle = {
    opacity: 1 - transparency
  };
  return (
    <header className="h-10 w-2/4 fixed top-0 right-0 p-5" style={headerStyle}>
      <div className="flex-1 text-white flex items-center justify-end w-100">
        <nav>
          <ul className="flex space-x-3">
            <li>
              <CustomLink href="/" desc="Home" />
            </li>
            <li>
              <CustomLink href="/projects" desc="Projects" />
            </li>
            <li>
              <CustomLink href="/contacts" desc="Contacts" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const CustomLink = ({ href, desc }) => {
  const pathName = usePathname();
  const wrapperStyle = pathName === href ? 'text-white	' : 'text-gray-400';
  return (
    <div>
      <Link
        href={href}
        className={`${wrapperStyle} font-semibold py-1 px-2 bg-transparent cursor-pointer duration-200 hover:text-white`}
      >
        {desc}
      </Link>
    </div>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string,
  desc: PropTypes.string
};

export default CustomHeader;
