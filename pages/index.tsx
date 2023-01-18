import type { NextPage } from 'next';

import {
  BackgroundSection,
  CardSection,
  GoToRegistrationSection,
  HomeLayout,
  TitleSection,
} from '@/components/home';

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <TitleSection />
      <CardSection />
      <GoToRegistrationSection />
      <BackgroundSection />
    </HomeLayout>
  );
};

export default Home;
