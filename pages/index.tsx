import type { NextPage } from 'next';

import { HomeLayout, HomeTitle, HomeContents, GoToRegistrationButton } from '@/components/home';
import { BaseCard } from '@/components/common';

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <HomeContents>
        <HomeTitle>연봉 쭉 쭉 오르는{'\n'}매숑이 카드 만들기</HomeTitle>
        <BaseCard />
        <GoToRegistrationButton />
      </HomeContents>
    </HomeLayout>
  );
};

export default Home;
