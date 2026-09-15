import PageTransition from '@/components/PageTransition';
import '@/app/globals.css';

export default function App({ Component, pageProps, router }) {
  return (
    <PageTransition routeKey={router.asPath}>
      <Component {...pageProps} />
    </PageTransition>
  );
}