import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import MainLayout from '@/layouts/MainLayout';

const ContainerHome: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <MainLayout>
        <section className="max-w-7xl mx-auto"></section>
      </MainLayout>
    </>
  );
};

export default ContainerHome;
