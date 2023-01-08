import useDetectViewportHeight from '@/components/hooks/useDetectViewportHeight';
import { ReactNode } from 'react';
import * as Styled from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { vh } = useDetectViewportHeight();
  return <Styled.Layout vh={vh}>{children}</Styled.Layout>;
};

export default Layout;
