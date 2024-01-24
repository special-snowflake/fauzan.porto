'use client'

import { Open_Sans } from 'next/font/google';
import Head from 'next/head';
import '@/app/globals.css';
import { usePathname } from 'next/navigation';

const openSans = Open_Sans({ subsets: ['latin'], weight: '400' });
export default function Layout({ children }) {
  const pathname = usePathname();
  let title = '';
  switch (pathname) {
    case '/projects':
      title = 'Projects';
      break;
    case '/contacts':
      title = 'Contacts';
      break;
    default:
      title = 'Home';
      break;
  }

  return (
    <div className={openSans.className}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
}
