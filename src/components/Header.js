'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

const CustomHeader = () => {
  return (
    <header className="h-10 w-2/4 fixed top-0 right-0 p-5">
      <div className="flex-1 text-white flex items-center justify-start w-100">
        <nav className="">
          <ul className="flex space-x-2">
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
  const wrapperStyle = pathName === href ? 'font-bold	' : '';
  return (
    <div
      className={`${wrapperStyle} py-1 px-2 bg-transparent cursor-pointer duration-200 hover:bg-[#a1a1a1] rounded`}
    >
      <Link href={href}> {desc} </Link>
    </div>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string,
  desc: PropTypes.string
};

export default CustomHeader;
