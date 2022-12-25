import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Main, Meta } from '@/layouts';

const HomeComponent = dynamic(() => import('../containers/Home'), {
  ssr: true,
});

interface IProps {}

const Index: React.FC<IProps> = (): JSX.Element => {
  return (
    <Main meta={<Meta title="Home Page" description="Home Page Description" />}>
      <HomeComponent />
    </Main>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
