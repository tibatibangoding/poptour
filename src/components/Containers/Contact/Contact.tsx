import { FC } from 'react';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';

const ContainerContact: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <main>
        <div className=""></div>
      </main>
    </>
  );
};

export default ContainerContact;
