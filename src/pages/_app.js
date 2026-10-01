import PageTransition from '@/components/PageTransition';
import '@/app/globals.css';
import { fontVariables } from '@/fonts-pages';

/**
 * Pages Router app shell.
 *
 * next/font CSS is collected per page entry here — importing the font in
 * _document alone left the pages bundle with no @font-face rules (the routes
 * fell back to a platform face). The variable class is applied to a wrapper, and
 * .pages-root (globals.css) consumes it so the whole subtree resolves Inter.
 */
export default function App({ Component, pageProps, router }) {
  return (
    <div className={`pages-root ${fontVariables}`}>
      <PageTransition routeKey={router.asPath}>
        <Component {...pageProps} />
      </PageTransition>
    </div>
  );
}
