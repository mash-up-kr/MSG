import { LiHTMLAttributes } from 'react';
import * as Styled from './OptionItem.styled';

interface OptionItemProps extends LiHTMLAttributes<HTMLLIElement> {
  isSelected: boolean;
}

const OptionsItem = ({ children, onClick, isSelected }: OptionItemProps) => {
  return (
    <Styled.OptionItem onClick={onClick} isSelected={isSelected}>
      <Styled.OptionItemInner>{children}</Styled.OptionItemInner>
    </Styled.OptionItem>
  );
};

export default OptionsItem;
