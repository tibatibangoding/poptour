import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './Navbar.module.css';
import { headerNavLinks } from '@/data/headerNavLinks';
import { classNames } from '@/lib/classNames';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAbsolute, setIsAbsolute] = useState<boolean>(false);

  const router = useRouter();
  const { pathname } = router;

  // Navbar fixed position if scrolling
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      const fixNav = header?.offsetTop ?? 0;

      if (window.pageYOffset > fixNav) {
        // header?.classList.add(styles.navbarFixed);
        setIsAbsolute(false);
      } else {
        // header?.classList.remove(styles.navbarFixed);
        setIsAbsolute(true);
      }
    };
  }, [isAbsolute]);

  // Hamburger menu handler
  const hamburgerHandler = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');

    setIsOpen(!isOpen);

    if (isOpen) {
      hamburger?.classList.remove(styles.hamburgerActive);
      navMenu?.classList.add('hidden');
    } else {
      hamburger?.classList.add(styles.hamburgerActive);
      navMenu?.classList.remove('hidden');
    }
  };

  // isMenuActive handler
  const isMenuActive = (path: string) => {
    const isHomePage = pathname === '/' && path === '/';

    if (isHomePage) {
      return true;
    }

    return pathname !== '/' && path !== '/' && pathname.includes(path);
  };

  return (
    <header
      className={`${
        isAbsolute ? 'absolute' : 'fixed shadow-md'
      } bg-primary top-0 left-0 w-full flex items-center z-10`}
    >
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link href="/" legacyBehavior>
                <a
                  className="inline-flex items-center gap-2 py-1"
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

            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="right-4 block absolute lg:hidden"
                onClick={hamburgerHandler}
              >
                <span
                  className={`${styles.hamburgerLine} origin-top-left transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`${styles.hamburgerLine} transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`${styles.hamburgerLine} origin-bottom-left transition duration-300 ease-in-out`}
                ></span>
              </button>

              <nav
                id="navMenu"
                className="hidden absolute py-5 bg-[#0d5bb3] shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  {headerNavLinks?.map((a, i) => (
                    <li className="group" key={i}>
                      <Link href={a.path} legacyBehavior>
                        <a
                          className={classNames(
                            isMenuActive(a.path)
                              ? 'text-secondary'
                              : 'text-white',
                            'font-secondary font-semibold text-base py-2 mx-8 lg:mx-2 flex group-hover:text-secondary transition duration-300 ease-in-out'
                          )}
                        >
                          {a.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
