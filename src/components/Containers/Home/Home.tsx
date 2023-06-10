import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';

const ContainerHome: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <main className="py-24 my-40">
        <section className="max-w-7xl mx-auto">
          <h1>HALOOOO</h1>
        </section>
      </main>
    </>
  );
};

export default ContainerHome;
