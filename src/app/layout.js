import './globals.css';
import data from '../../public/assets/data.json';
import { fontVariables } from '@/fonts';

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  keywords: data.metadata.keywords,
  authors: [{ name: data.metadata.author }]
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
};

export default function RootLayout({ children }) {
  // Font CSS variables are declared on <html> so `var(--font-roobert)`
  // resolves for body copy as well as for elements that re-declare it.
  return (
    <html lang={data.metadata.language} className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
