import { ReactNode } from 'react';
import * as Styled from './OptionList.styled';

interface OptionListProps {
  children: ReactNode;
}

const OptionList = ({ children }: OptionListProps) => {
  return <Styled.OptionList>{children}</Styled.OptionList>;
};

export default OptionList;
