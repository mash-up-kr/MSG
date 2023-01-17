import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DescriptionSection = styled.section`
  margin: 3rem 0;
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.2;
    white-space: pre-wrap;
    text-align: center;
  `}
`;
