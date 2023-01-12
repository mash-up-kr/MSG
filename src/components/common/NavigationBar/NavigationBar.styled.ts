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
    height: 6rem;
    padding: 0 1rem;
    background: ${theme.color.gray900};
  `}
`;

export const BackButton = styled.button`
  ${({ theme }) => css`
    padding: 1.4rem 2rem 1.4rem 1.7rem;
    background: transparent;
    border: 0;
    border-radius: 1.2rem;

    &:active {
      background: ${theme.color.gray700};
    }
  `}
`;

export const LessThanIcon = styled(LessThan)``;

export const RightButton = styled.button<{ color: KeyOf<ColorType> }>`
  ${({ theme, color }) => css`
    padding: 1.05rem 1rem;
    color: ${theme.color[color]};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.3rem;
    background: transparent;
    border: 0;
    border-radius: 1.2rem;

    &:disabled {
      color: ${theme.color.gray500};
      cursor: not-allowed;
    }

    &:active {
      background: ${theme.color.gray700};
    }
  `}
`;
