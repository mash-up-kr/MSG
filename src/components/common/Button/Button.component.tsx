import { MouseEventHandler, ReactNode } from 'react';
import * as Styled from './Button.styled';

interface ButtonProps {
  size: 's' | 'l' | 'xl';
  isDisabled?: boolean;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button = ({
  size,
  isDisabled = false,
  isSelected = true,
  onClick,
  children,
}: ButtonProps) => {
  if (size === 'l') {
    return (
      <Styled.LargeButton disabled={isDisabled} isSelected={isSelected} onClick={onClick}>
        {children}
      </Styled.LargeButton>
    );
  }

  if (size === 'xl') {
    return (
      <Styled.XLargeButton disabled={isDisabled} isSelected={isSelected} onClick={onClick}>
        {children}
      </Styled.XLargeButton>
    );
  }

  return (
    <Styled.SmallButton disabled={isDisabled} isSelected={isSelected} onClick={onClick}>
      {children}
    </Styled.SmallButton>
  );
};

export default Button;
