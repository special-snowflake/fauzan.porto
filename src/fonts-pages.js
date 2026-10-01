import { Inter, Raleway } from 'next/font/google';

/**
 * Pages Router font definitions — deliberately a SEPARATE module from src/fonts.js.
 *
 * With Turbopack, a font module shared between the App Router and Pages Router
 * graphs gets its @font-face CSS emitted only once (into the App Router chunk),
 * so pages routes link a stylesheet with no @font-face and silently fall back to
 * a platform face. Keeping a distinct module per router graph makes each bundle
 * emit its own font CSS.
 *
 * Same families/weights as src/fonts.js — keep the two in sync.
 */

const roobert = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-inter-src',
  display: 'swap'
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-raleway-src',
  display: 'swap'
});

export const fontVariables = `${roobert.variable} ${raleway.variable}`;
