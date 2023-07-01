import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import CallToAction from '@/components/Common/CallToAction';
import AboutContent from './components/AboutContent';
import Features from './components/Features';

const ContainerAbout: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <main className="py-20">
        <section className="max-w-7xl mx-auto">
          <div className="w-full px-4">
            <AboutContent />

            <Features />

            <CallToAction
              message="Yuk Liburan Bersama Kami!"
              href="/tour-packages"
              action="Lihat Paket Wisata"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerAbout;
