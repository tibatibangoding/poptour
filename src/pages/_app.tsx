import Navbar from '@/components/Mixins/Navbar/Navbar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Footer from '@/components/Mixins/Footer';
import ScrollToTop from '@/components/Common/ScrollToTop';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
