import type { PropsWithChildren } from 'react';
import * as Styled from './HomeLayout.styled';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return <Styled.Main>{children}</Styled.Main>;
};

export default HomeLayout;
