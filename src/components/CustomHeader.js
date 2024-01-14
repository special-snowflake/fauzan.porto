'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CustomHeader = () => {
  return (
    <header className="p-4 top-0 fixed">
      <nav>
        <ul className="flex space-x-4">
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
    </header>
  );
};

const CustomLink = ({ href, desc }) => {
  const pathName = usePathname();
  return (
    <div className={pathName === href && 'font-bold'}>
      <Link href={href}> {desc} </Link>
    </div>
  );
};

export default CustomHeader;
