import type { ReactNode } from 'react';
import { Suspense } from 'react';

import { Loader } from '@/components';

import Footer from '../Footer';
import Header from '../Header';

type IProps = {
  meta?: ReactNode;
  children: ReactNode;
  showHeader: boolean;
  showFooter: boolean;
};

export const Main: React.FC<IProps> = ({
  meta,
  children,
  showHeader = true,
  showFooter = true,
}): JSX.Element => (
  <div>
    {meta}
    {showHeader && <Header />}
    <Suspense fallback={<Loader />}>{children}</Suspense>
    {showFooter && <Footer />}
  </div>
);
