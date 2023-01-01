import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '@/styles/globalStyles';
import { theme } from '@/styles/theme';
import { Layout } from '@/components/common';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
