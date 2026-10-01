import { Html, Head, Main, NextScript } from 'next/document';
import data from '../../public/assets/data.json';
import { fontVariables } from '@/fonts-pages';

/**
 * Pages Router document root.
 *
 * Without this file the Pages Router routes (/projects, /contacts) had no <html>
 * to hang the next/font CSS variables on, so they rendered in the platform
 * fallback face instead of Inter/Raleway.
 */
export default function Document() {
  return (
    <Html lang={data.metadata.language} className={fontVariables}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
