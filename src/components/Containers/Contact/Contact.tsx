import { FC } from 'react';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import TopSection from './Components/TopSection';
import Maps from './Components/Maps';
import Form from './Components/Form';

const ContainerContact: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <main className="py-20">
        <section className="max-w-7xl mx-auto">
          <div className="w-full px-4">
            <TopSection />
            <Maps />
            <Form />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerContact;
