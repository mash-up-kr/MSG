import { ReactNode } from 'react';
import * as Styled from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default Layout;
