import type { PropsWithChildren } from 'react';
import { LinearGradientSphere } from '@/components/common';
import * as Styled from './HomeContents.styled';

const HomeContents = ({ children }: PropsWithChildren) => {
  return (
    <Styled.Container>
      {children}
      <Styled.SphereContainer>
        <LinearGradientSphere />
      </Styled.SphereContainer>
    </Styled.Container>
  );
};

export default HomeContents;
