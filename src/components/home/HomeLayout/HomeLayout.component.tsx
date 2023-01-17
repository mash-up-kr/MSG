import type { PropsWithChildren } from 'react';
import * as Styled from './HomeLayout.styled';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <Styled.Main>
      <Styled.BackgroundTop />
      {children}
    </Styled.Main>
  );
};

export default HomeLayout;
