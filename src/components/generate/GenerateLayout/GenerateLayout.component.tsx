import { ReactNode } from 'react';
import * as Styled from './GenerateLayout.styled';

interface GenerateLayoutProps {
  children: ReactNode;
}

const GenerateLayout = ({ children }: GenerateLayoutProps) => {
  return <Styled.GenerateLayout>{children}</Styled.GenerateLayout>;
};

export default GenerateLayout;
