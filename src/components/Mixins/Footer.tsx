import { FC } from 'react';
import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from '../Common/CustomIcons';

const Footer: FC = () => {
  const year = new Date().getFullYear();

  const primaryLink = [
    { title: 'Beranda', url: '/' },
    { title: 'Paket Wisata', url: '/tour-packages' },
    { title: 'Tentang Kami', url: '/about-us' },
  ];

  const secondaryLink = [
    { title: 'Kustom Perjalanan', url: '/tour-packages/custom-trip' },
    { title: 'Rental Mobil', url: '/car-rental' },
    { title: 'Galeri', url: '/gallery' },
  ];

  const tertiaryLink = [
    { title: 'Kontak Kami', url: '/contact' },
    { title: 'FAQ', url: '/faq' },
  ];

  const legalLink = [
    { title: 'Terms of Service', url: '/terms-of-service' },
    { title: 'Privacy Policy', url: '/privacy-policy' },
  ];

  const socialLink = [
    { title: 'Facebook', icon: <FacebookIcon />, url: '/' },
    {
      title: 'Instagram',
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/poptour.id/',
    },
    {
      title: 'Tiktok',
      icon: <TiktokIcon />,
      url: 'https://www.tiktok.com/@poptour_id',
    },
    {
      title: 'Youtube',
      icon: <YoutubeIcon />,
      url: 'https://www.youtube.com/@poptour_id',
    },
  ];

  return (
    <div className="bg-[#061c35]">
      <footer className="max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
          <div className="col-span-full lg:col-span-2">
            <div className="mb-4">
              <Link href="/" legacyBehavior>
                <a
                  className="inline-flex items-center text-gray-100 gap-2"
                  aria-label="logo"
                >
                  <img
                    src="/assets/img/logo/PopTour_Hori.png"
                    alt="Brand Logo"
                    loading="lazy"
                    className="w-42 h-20 object-cover object-center"
                  />
                </a>
              </Link>
            </div>

            <p className="text-gray-400 text-justify sm:pr-8 mb-6">
              POP Tour adalah sebuah biro wisata terpercaya yang menyediakan
              Paket Perjalanan Wisata Malang, Paket Wisata Bromo, Rental Mobil
              dan Sewa Bus di Malang
            </p>

            <div className="flex gap-4">
              {socialLink?.map((f, i) => (
                <a
                  href={f.url}
                  target="_blank"
                  className="text-gray-400 hover:text-secondary active:text-secondary transition duration-100"
                  rel="noreferrer"
                  key={i}
                >
                  {f.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-wide uppercase mb-4">
              Perusahaan
            </div>

            <nav className="flex flex-col gap-4">
              {primaryLink?.map((b, i) => (
                <div key={i}>
                  <Link href={b.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-secondary active:text-secondary/80 transition duration-100">
                      {b.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-wide uppercase mb-4">
              Tautan Lainnya
            </div>

            <nav className="flex flex-col gap-4">
              {secondaryLink?.map((c, i) => (
                <div key={i}>
                  <Link href={c.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-secondary active:text-secondary/80 transition duration-100">
                      {c.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-wide uppercase mb-4">
              Bantuan
            </div>

            <nav className="flex flex-col gap-4">
              {tertiaryLink?.map((d, i) => (
                <div key={i}>
                  <Link href={d.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-secondary active:text-secondary/80 transition duration-100">
                      {d.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-gray-100 font-bold tracking-wide uppercase mb-4">
              Legal
            </div>

            <nav className="flex flex-col gap-4">
              {legalLink?.map((e, i) => (
                <div key={i}>
                  <Link href={e.url} legacyBehavior>
                    <a className="text-gray-400 hover:text-secondary active:text-secondary/80 transition duration-100">
                      {e.title}
                    </a>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">
          <p>© {year} - POP Tour. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href="https://github.com/tibatibangoding"
              target="_blank"
              className="text-secondary hover:underline"
            >
              Tiba Tiba Ngoding
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
