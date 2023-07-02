import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';

import { BannerProvider } from '@/context/BannerContext';
import Navbar from '@/components/Mixins/Navbar/Navbar';
import Footer from '@/components/Mixins/Footer';
import WhatsappWidget from '@/components/Common/WhatsappWidget';
// import CtaWhatsapp from '@/components/Common/CtaWhatsapp';
// import ScrollToTop from '@/components/Common/ScrollToTop';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BannerProvider>
      <>
        <Navbar />

        <ToastContainer autoClose={1500} />

        {/* <CtaWhatsapp /> */}

        {/* <ScrollToTop /> */}

        <WhatsappWidget />

        <Component {...pageProps} />

        <Footer />

        {/* <script
          src="https://cdn.jsdelivr.net/npm/react-whatsapp-chat-widget@1.1.6/index.min.js"
          defer
        ></script>
        <link
          href="https://cdn.jsdelivr.net/npm/react-whatsapp-chat-widget@1.1.6/index.min.css"
          rel="stylesheet"
        /> */}

        {/* <div className="elfsight-app-8d3bfe70-28be-45e3-b521-3f6f19842ec6 w-10 h-20"></div> */}
        {/* <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script> */}
      </>
    </BannerProvider>
  );
}

export default MyApp;
