import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";

import Navbar from "@/components/Mixins/Navbar/Navbar";
import Footer from "@/components/Mixins/Footer";
import ScrollToTop from "@/components/Common/ScrollToTop";
import CtaWhatsapp from "@/components/Common/CtaWhatsapp";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <ToastContainer autoClose={1500} />

      <ScrollToTop />
      <CtaWhatsapp />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
