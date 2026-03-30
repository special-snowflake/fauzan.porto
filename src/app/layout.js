import { Open_Sans } from 'next/font/google';
import './globals.css';
import data from '../../public/assets/data.json';

const inter = Open_Sans({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description
};

export default function RootLayout({ children }) {
  return (
    <html lang={data.metadata.language}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
