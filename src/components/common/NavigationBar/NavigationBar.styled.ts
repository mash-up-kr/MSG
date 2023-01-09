import { css } from '@emotion/react';
import styled from '@emotion/styled';
import LessThan from '@/assets/svg/less-than.svg';
import { KeyOf } from '@/types/helper';
import { ColorType } from '@/styles/theme/color';

export const NavigationBar = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row-reverse nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 5.2rem;
    padding: 0 2rem;
    background: ${theme.color.gray900};
  `}
`;

export const BackButton = styled.button`
  padding: 0.4rem 1rem 0.5rem 0.7rem;
  background: transparent;
`;

export const LessThanIcon = styled(LessThan)``;

export const RightButton = styled.button<{ color: KeyOf<ColorType> }>`
  ${({ theme, color }) => css`
    padding: 0;
    color: ${theme.color[color]};
    font-weight: 700;
    font-size: 1.4rem;
    background: transparent;
    border: 0;

    &:disabled {
      color: ${theme.color.gray500};
      cursor: not-allowed;
    }
  `}
`;
