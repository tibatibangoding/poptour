import { FC } from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';

import { TourPackages } from '@/interfaces/tourPackages';
import ContainerDetailTourPackages from '@/components/Containers/TourPackages/Detail/DetailTourPackages';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tour-packages`);
  const data = await res.json();

  const paths = data.tour.map((item: TourPackages) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tour-packages`);
  const resJson = await res.json();

  const data = resJson.tour.filter(
    (item: TourPackages) => item.slug === params?.slug
  );

  return {
    props: {
      data,
    },
  };
};

const DetailTour: FC = ({ data }: any) => {
  return <ContainerDetailTourPackages data={data} />;
};

export default DetailTour;
