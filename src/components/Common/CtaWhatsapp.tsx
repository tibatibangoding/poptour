import React, { useEffect, useState } from 'react';
import { WhatsAppIcon } from './CustomIcons';
import { classNames } from '@/lib/classNames';
import Link from 'next/link';

const CtaWhatsapp = () => {
  const [isLeft, setIsLeft] = useState<boolean>(false);

  const toggleLeft = () => {
    if (window.pageYOffset > 300) {
      setIsLeft(true);
    } else {
      setIsLeft(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleLeft);

    return () => {
      window.removeEventListener('scroll', toggleLeft);
    };
  }, []);
  return (
    <>
      <div
        className={classNames(
          isLeft
            ? 'fixed bottom-6 right-16 z-50'
            : 'fixed bottom-6 right-6 z-50'
        )}
      >
        <Link href={'https://wa.me/6282245103862'}>
          <button className="bg-green-400 py-1.5 px-1.5 rounded-xl hover:bg-green-500">
            <WhatsAppIcon />
          </button>
        </Link>
      </div>
    </>
  );
};

export default CtaWhatsapp;
