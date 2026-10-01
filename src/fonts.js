import { Inter, Raleway } from 'next/font/google';

/**
 * Shared next/font definitions.
 *
 * This project runs a hybrid router (App Router for "/", Pages Router for
 * /projects and /contacts). Each router has its own document root, so the font
 * loaders must be imported by BOTH roots — otherwise the faces are emitted only
 * for the App Router bundle and the Pages Router routes silently fall back to a
 * system face (Noto Sans).
 *
 * Roobert substitute per DESIGN.md: Inter (geometric-humanist, weights 300/400/600).
 */

export const roobert = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-inter-src',
  display: 'swap'
});

// Raleway — heading accent only, never body or navigation
export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-raleway-src',
  display: 'swap'
});

export const fontVariables = `${roobert.variable} ${raleway.variable}`;
