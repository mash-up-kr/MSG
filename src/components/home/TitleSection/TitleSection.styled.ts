import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TitleSection = styled.section`
  margin-top: 3rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    display: block;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    white-space: pre-line;
    text-align: center;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    margin-bottom: 0.8rem;
    color: ${theme.color.white};
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
    text-align: center;
    opacity: 0.5;
  `}
`;
