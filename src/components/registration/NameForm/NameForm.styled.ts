import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  white-space: pre-wrap;
  text-align: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    position: relative;
    width: 200px;
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

export const Note = styled.p`
  ${({ theme }) => css`
    margin-top: 2rem;
    color: ${theme.color.gray500};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    text-align: center;
  `}
`;
