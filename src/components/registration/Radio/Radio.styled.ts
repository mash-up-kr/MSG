import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Input = styled.input`
  ${({ theme }) => css`
    position: absolute;
    margin: 0;
    opacity: 0;
    appearance: none;

    &:checked + label {
      padding: 1.8rem 2.2rem;
      border: 0.2rem solid ${theme.color.white};
      opacity: 1;
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: relative;
    padding: 2rem 2.4rem;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: center;
    background: ${theme.color.mashup};
    border-radius: 1.6rem;
    opacity: 0.5;
  `}
`;
