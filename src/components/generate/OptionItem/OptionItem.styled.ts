import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const OptionItem = styled.li<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    min-width: 7.6rem;
    overflow: hidden;
    background: ${isSelected ? theme.color.mashup : theme.color.gray900};
    background-origin: border-box;
    border: 0.2rem solid ${isSelected ? 'transparent' : theme.color.gray700};
    border-radius: 1.3rem;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  `}
`;

export const OptionItemInner = styled.div`
  ${({ theme }) => css`
    padding: 1.2rem;
    background: ${theme.color.gray900};
  `}
`;
