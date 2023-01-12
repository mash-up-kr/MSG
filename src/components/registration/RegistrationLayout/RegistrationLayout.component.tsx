import type { PropsWithChildren } from 'react';
import * as Styled from './RegistrationLayout.styled';

const RegistrationLayout = ({ children }: PropsWithChildren) => {
  return <Styled.Main>{children}</Styled.Main>;
};

export default RegistrationLayout;
