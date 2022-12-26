import '../styles/global.css';

import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';

import { ErrorBoundary, PrivateRoute } from '@/components';
import { QueryProvider } from '@/libs';
import { theme } from '@/styles';
import type { NextPageWithLayout } from '@/types';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const authenticationRequired: boolean =
    Component.authenticationRequired ?? false;

  return (
    <div>
      <SessionProvider session={session}>
        <QueryProvider pageProps={pageProps}>
          <ThemeProvider theme={theme}>
            <ErrorBoundary>
              {authenticationRequired ? (
                <PrivateRoute>{<Component {...pageProps} />}</PrivateRoute>
              ) : (
                <Component {...pageProps} />
              )}
            </ErrorBoundary>
          </ThemeProvider>
        </QueryProvider>
      </SessionProvider>
    </div>
  );
}

export default appWithTranslation(MyApp);
