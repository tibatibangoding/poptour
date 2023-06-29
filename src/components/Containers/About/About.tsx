import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import CallToAction from '@/components/Common/CallToAction';
import AboutContent from './components/AboutContent';
import Location from './components/Location';
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

            <Location />
            
            <Features />

            <CallToAction />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerAbout;
