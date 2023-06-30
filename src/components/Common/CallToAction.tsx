import { FC } from 'react';
import Link from 'next/link';

type Props = {
  message: string;
  href: string;
  action: string;
};

const CallToAction: FC<Props> = ({ message, href, action }) => {
  return (
    <section>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
          <div>
            <h2 className="text-xl font-bold text-primary md:text-3xl">
              {message}
            </h2>
          </div>

          <Link href={href} legacyBehavior>
            <a className="inline-block rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-white hover:text-primary outline-none ring-primary/30 transition ease-in-out duration-200 hover:bg-secondary focus-visible:ring active:bg-secondary/70 md:text-base">
              {action}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
