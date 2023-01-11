import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ResultCardSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  padding: 0 3rem;
`;

export const EffectText = styled.div`
  ${({ theme }) => css`
    margin-bottom: 4rem;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.2;
    white-space: pre-wrap;
    text-align: center;
  `}
`;

export const SaveAndShareContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 31.5rem;
  margin: 4rem 0 0;
  column-gap: 1.5rem;
`;
