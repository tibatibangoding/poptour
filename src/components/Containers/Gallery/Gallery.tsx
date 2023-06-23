import { FC } from 'react';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';

const ContainerGallery: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <main className="py-20">
        <div className="max-w-7xl mx-auto">
          <body className="min-h-screen bg-white py-10">
            <div className="over container mx-auto max-w-7xl px-10 xl:px-0">
              <div className="bmc rounded border bg-white">
                <div className="border ">
                  <img
                    className="w-full h-full bg-cover bg-center"
                    src="assets/img/Bromo 1.JPG"
                    alt="BromoImage"
                  />
                </div>

                <div className="border">
                  <img
                    className="w-full h-full bg-cover bg-center"
                    src="assets/img/Bromo 1.JPG"
                    alt="BromoImage"
                  />
                </div>

                <div className="border ">
                  <img
                    className="w-full h-full bg-cover bg-center"
                    src="assets/img/Bromo 1.JPG"
                    alt="BromoImage"
                  />
                </div>

                <div className="border ">
                  <img
                    className="w-full h-full bg-cover bg-center"
                    src="assets/img/Bromosunset.JPG"
                    alt="BromoImage"
                  />
                </div>

                <div className="border ">
                  <img
                    className="w-full h-full bg-cover bg-center"
                    src="assets/img/Bromo 1.JPG"
                    alt="BromoImage"
                  />
                </div>

                <div className="border ">
                  <img
                    className="w-full h-full bg-cover bg-center"
                    src="assets/img/Bromo 1.JPG"
                    alt="BromoImage"
                  />
                </div>

                <div className="border ">
                  <img
                    className="w-full h-full bg-cover bg-center"
                    src="assets/img/Bromo 1.JPG"
                    alt="BromoImage"
                  />
                </div>

                <div className="border ">
                  <img
                    className="w-full h-full bg-cover bg-center"
                    src="assets/img/Bromo 1.JPG"
                    alt="BromoImage"
                  />
                </div>

                <div className="border ">
                  <img
                    className="w-full h-full bg-cover bg-center"
                    src="assets/img/Bromo 1.JPG"
                    alt="BromoImage"
                  />
                </div>
              </div>
            </div>
          </body>
        </div>
      </main>
    </>
  );
};

export default ContainerGallery;
