import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '@/styles/globalStyles';
import { theme } from '@/styles/theme';
import { Layout } from '@/components/common';
import { defaultSEO } from '@/constants/seo';
import useGoogleAnalytics from '@/hooks/useGoogleAnalytics';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const GoogleAnalyticsScripts = useGoogleAnalytics();

  return (
    <>
      <GoogleAnalyticsScripts />
      <Global styles={globalStyles} />
      <DefaultSeo {...defaultSEO} />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
