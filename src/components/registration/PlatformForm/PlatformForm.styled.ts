import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 80%;
  margin-top: 4rem;
`;

export const FormLabel = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    color: ${theme.color.white};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: center;
  `}
`;

export const Emphasis = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.8rem;
  `}
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
