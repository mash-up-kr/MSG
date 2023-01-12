import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps {
  isSelected: boolean;
}

export const SmallButton = styled.button<ButtonProps>`
  ${({ theme, isSelected }) => css`
    padding: 0.8rem 1.7rem 0.9rem;
    color: ${isSelected ? theme.color.white : theme.color.gray500};
    font-weight: 700;
    font-size: 1.4rem;
    background: ${isSelected ? theme.color.mashup : theme.color.gray900};
    background-origin: border-box;
    border: 0.1rem solid ${isSelected ? theme.color.transparent : theme.color.gray700};
    border-radius: 2rem;

    &:active {
      color: ${theme.color.gray500};
      background: ${theme.color.gray700};
      border: 0.1rem solid ${theme.color.gray500};
    }
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

    &:active {
      color: rgba(255, 255, 255, 0.5);
      background: ${isSelected
        ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(98.54deg, #ff1c60 0%, #5243ff 100%)'
        : 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #495066'};
    }
  `}
`;

export const XLargeButton = styled.button<ButtonProps>`
  ${({ theme, isSelected }) => css`
    padding: ${isSelected ? '2rem 2.6rem' : '2rem 2.4rem'};
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2rem;
    background: ${theme.color.mashup};
    border: ${isSelected ? `0.2rem solid ${theme.color.white}` : 0};
    border-radius: 1.6rem;
    opacity: ${isSelected ? 1 : 0.5};
  `}
`;
