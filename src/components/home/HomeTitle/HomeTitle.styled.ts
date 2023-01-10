import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
