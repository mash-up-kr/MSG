import type { PropsWithChildren } from 'react';
import * as Styled from './HomeLayout.styled';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return <Styled.HomeLayout>{children}</Styled.HomeLayout>;
};

export default HomeLayout;
