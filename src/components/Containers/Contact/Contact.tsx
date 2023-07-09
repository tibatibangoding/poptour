import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import TopSection from './Components/TopSection';
import Form from './Components/Form';
import Location from './Components/Location';

const ContainerContact: FC = () => {
  return (
    <>
      <PageSEO
        title="Kontak Kami - POP Tour"
        description="POP Tour menghargai setiap pertanyaan dan umpan balik dari pelanggan kami. Kami siap mendengarkan dan membantu Anda dengan solusi terbaik sesuai kebutuhan Anda. Dengan komunikasi yang responsif dan tanggap, kami akan memastikan setiap pertanyaan Anda terjawab dengan cepat dan tepat."
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
