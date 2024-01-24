import { Open_Sans } from 'next/font/google';
import './globals.css';

const inter = Open_Sans({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Ahmad Fauzan - Portfolio',
  description: 'Personal Portofolio'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
