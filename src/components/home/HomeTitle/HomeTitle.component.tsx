import type { PropsWithChildren } from 'react';
import * as Styled from './HomeTitle.styled';

const HomeTitle = ({ children }: PropsWithChildren) => {
  return <Styled.Title>{children}</Styled.Title>;
};

export default HomeTitle;
