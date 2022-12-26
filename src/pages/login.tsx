import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Main, Meta } from '@/layouts';

const LoginComponent = dynamic(() => import('../containers/Auth/login'), {
  ssr: true,
});

interface IProps {}

const Index: React.FC<IProps> = (): JSX.Element => {
  return (
    <Main
      showFooter={false}
      showHeader={false}
      meta={<Meta title="Login Page" description="Login Page Description" />}
    >
      <LoginComponent />
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
