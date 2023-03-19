import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '@/styles/globalStyles';
import { theme } from '@/styles/theme';
import { Layout } from '@/components/common';
import { defaultSEO } from '@/constants/seo';
import useGoogleAnalytics from '@/hooks/useGoogleAnalytics';
import { Toaster } from 'react-hot-toast';
import useGoogleTagManager from '@/hooks/useGoogleTagManager';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const GoogleTagManagerScripts = useGoogleTagManager();
  const GoogleAnalyticsScripts = useGoogleAnalytics();

  return (
    <>
      <GoogleTagManagerScripts />
      <GoogleAnalyticsScripts />
      <Global styles={globalStyles} />
      <DefaultSeo {...defaultSEO} />

      <ThemeProvider theme={theme}>
        <Toaster
          containerStyle={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
