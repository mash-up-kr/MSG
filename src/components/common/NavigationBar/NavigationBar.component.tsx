import { MouseEventHandler } from 'react';
import * as Styled from './NavigationBar.styled';

interface NavigationBarProps {
  rightButtonText: string;
  rightButtonEvent: MouseEventHandler<HTMLButtonElement>;
  backButtonEvent: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

const NavigationBar = ({
  rightButtonText,
  rightButtonEvent,
  backButtonEvent,
  isDisabled = false,
}: NavigationBarProps) => {
  return (
    <Styled.NavigationBar>
      <Styled.BackButton type="button" onClick={backButtonEvent}>
        <Styled.LessThanIcon />
      </Styled.BackButton>
      <Styled.RightButton type="button" onClick={rightButtonEvent} disabled={isDisabled}>
        {rightButtonText}
      </Styled.RightButton>
    </Styled.NavigationBar>
  );
};

export default NavigationBar;
