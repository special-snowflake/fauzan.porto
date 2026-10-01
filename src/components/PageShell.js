'use client';

import Head from 'next/head';
import '@/app/globals.css';

/**
 * Document shell for the Pages Router routes (/projects, /contacts).
 * Replaces the old src/pages/layout.js wrapper, which — because anything under
 * src/pages/ becomes a route — also published a stray public /layout page.
 */
const PageShell = ({ children, title = 'Home' }) => (
  <div className="page-shell">
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </div>
);

export default PageShell;
