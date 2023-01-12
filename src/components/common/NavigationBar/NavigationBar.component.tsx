import { ColorType } from '@/styles/theme/color';
import { KeyOf } from '@/types/helper';
import { MouseEventHandler } from 'react';
import * as Styled from './NavigationBar.styled';

interface NavigationBarProps {
  rightButtonText: string;
  rightButtonEvent: MouseEventHandler<HTMLButtonElement>;
  backButtonEvent?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  isHideBackButton?: boolean;
  rightButtonColor?: KeyOf<ColorType>;
}

const NavigationBar = ({
  rightButtonText,
  rightButtonEvent,
  backButtonEvent,
  isDisabled = false,
  isHideBackButton = false,
  rightButtonColor = 'white',
}: NavigationBarProps) => {
  return (
    <Styled.NavigationBar>
      <Styled.RightButton
        type="button"
        onClick={rightButtonEvent}
        disabled={isDisabled}
        color={rightButtonColor}
      >
        {rightButtonText}
      </Styled.RightButton>
      {!isHideBackButton && (
        <Styled.BackButton type="button" onClick={backButtonEvent}>
          <Styled.LessThanIcon />
        </Styled.BackButton>
      )}
    </Styled.NavigationBar>
  );
};

export default NavigationBar;
