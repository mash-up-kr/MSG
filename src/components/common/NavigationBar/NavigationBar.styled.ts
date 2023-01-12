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
    padding: 0 1.3rem 0 1rem;
    background: ${theme.color.gray900};
  `}
`;

export const BackButton = styled.button`
  padding: 1.4rem 2rem 1.4rem 1.7rem;
  background: transparent;
  border: 0;
`;

export const LessThanIcon = styled(LessThan)``;

export const RightButton = styled.button<{ color: KeyOf<ColorType> }>`
  ${({ theme, color }) => css`
    padding: 1.1rem 0.7rem 1rem;
    color: ${theme.color[color]};
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.3rem;
    background: transparent;
    border: 0;

    &:disabled {
      color: ${theme.color.gray500};
      cursor: not-allowed;
    }
  `}
`;
