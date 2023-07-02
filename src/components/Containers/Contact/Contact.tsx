import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import TopSection from './Components/TopSection';
import Form from './Components/Form';
import Location from './Components/Location';

const ContainerContact: FC = () => {
  return (
    <>
      <PageSEO
        title="Kontak Kami - POP Tour"
        description={siteMetadata.description}
      />

      <main className="py-[89px]">
        <section className="max-w-7xl mx-auto">
          <TopSection />
          <Location />
          <Form />
        </section>
      </main>
    </>
  );
};

export default ContainerContact;
