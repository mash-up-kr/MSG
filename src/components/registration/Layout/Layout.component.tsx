import type { PropsWithChildren } from 'react';
import * as Styled from './Layout.styled';

const Layout = ({ children }: PropsWithChildren) => {
  return <Styled.Main>{children}</Styled.Main>;
};

export default Layout;
