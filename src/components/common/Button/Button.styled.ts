import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps {
  isSelected: boolean;
}

export const SmallButton = styled.button<ButtonProps>`
  ${({ theme, isSelected }) => css`
    padding: 0.8rem 1.6rem 0.9rem;
    color: ${isSelected ? theme.color.white : theme.color.gray500};
    font-weight: 700;
    font-size: 1.4rem;
    background: ${isSelected ? theme.color.mashup : theme.color.gray900};
    border: ${isSelected ? 0 : `0.1rem solid ${theme.color.gray700}`};
    border-radius: 2rem;
  `}
`;

export const LargeButton = styled.button<ButtonProps>`
  ${({ theme, isSelected }) => css`
    padding: 1.8rem 2.2rem;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 1.6rem;
    background: ${isSelected ? theme.color.mashup : theme.color.gray500};
    border: 0;
    border-radius: 1.2rem;
  `}
`;

export const XLargeButton = styled.button<ButtonProps>`
  ${({ theme, isSelected }) => css`
    padding: 2rem 2.4rem;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2rem;
    background: ${theme.color.mashup};
    border: ${isSelected ? `0.2rem solid ${theme.color.white}` : 0};
    border-radius: 1.6rem;
    opacity: ${isSelected ? 1 : 0.5};
  `}
`;
