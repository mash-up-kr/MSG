import { PropsWithChildren } from 'react';
import * as Styled from './ResultLayout.styled';

const ResultLayout = ({ children }: PropsWithChildren) => {
  return (
    <Styled.ResultLayout>
      <Styled.BackgroundTop />
      {children}
    </Styled.ResultLayout>
  );
};

export default ResultLayout;
