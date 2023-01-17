import { ReactNode } from 'react';
import * as Styled from './GenerateLayout.styled';

interface GenerateLayoutProps {
  children: ReactNode;
}

const GenerateLayout = ({ children }: GenerateLayoutProps) => {
  return (
    <Styled.GenerateLayout>
      <Styled.BackgroundTop />
      {children}
      <Styled.BackgroundBottom />
    </Styled.GenerateLayout>
  );
};

export default GenerateLayout;
