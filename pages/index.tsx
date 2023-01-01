import type { NextPage } from 'next';
import Head from 'next/head';
import { NavigationBar } from '@/components/common';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Index Page" />
      </Head>
      <header>
        <NavigationBar
          rightButtonText="다음"
          rightButtonEvent={() => {}}
          backButtonEvent={() => {}}
        />
      </header>
      <main>index page</main>
      <footer />
    </div>
  );
};

export default Home;
