import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { SEO } from '@/interfaces/SEO';
import { siteMetadata } from '@/data/siteMetadata';

const CommonSEO: FC<SEO> = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
}) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport' content='width=device-width, initial-scale=1" />
      <link
        rel="shortcut icon"
        href={siteMetadata.siteLogo}
        type="image/x-icon"
      />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        name="keyword"
        content="Biro Wisata Terpercaya, Agen Tur, Agen Tur Terpercaya, Gunung Bromo, Pantai 3 Warna, Air Terjun Tumpak Sewu, Kota Malang, Rental Mobil, Agen Wisata Terpercaya, Agen Wisata, Harga Terjangkau, Liburan, Wisata Murah, Wisata Bromo, Wisata Pantai 3 Warna, Wisata Air Terjun Tumpak Sewu"
      />
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage.constructor.name === 'Array' ? (
        ogImage.map(({ url }: any) => (
          <meta property="og:image" content={url} key={url} />
        ))
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link
        rel="canonical"
        href={
          canonicalUrl
            ? canonicalUrl
            : `${siteMetadata.siteUrl}${router.asPath}`
        }
      />
    </Head>
  );
};

export const PageSEO = ({
  title,
  description,
}: {
  title: string;
  description: string | any;
}) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;

  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};
