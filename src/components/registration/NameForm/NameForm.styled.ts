import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-top: 6rem;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.4rem;
  text-align: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    position: relative;
    padding: 2rem 2.4rem;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: center;
    background: ${theme.color.mashup};
    border: none;
    border-radius: 1.6rem;
    caret-color: ${theme.color.white};

    &:placeholder-shown {
      opacity: 0.5;
    }

    &::placeholder {
      color: ${theme.color.white};
    }

    &:focus {
      position: relative;
      padding: 1.8rem 2.2rem;
      border: 0.2rem solid ${theme.color.white};
      outline: none;
      opacity: 1;
    }

    &:focus::placeholder {
      color: transparent;
    }
  `}
`;
