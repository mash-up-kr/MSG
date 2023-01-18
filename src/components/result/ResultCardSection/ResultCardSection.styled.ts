import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ResultCard from '../ResultCard/ResultCard.component';

export const ResultCardSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  padding: 3rem 3rem 0;
`;

export const EffectText = styled.div`
  ${({ theme }) => css`
    ${theme.animation.fadeUp({ duration: 0.8, move: 2 })};
    margin-bottom: 4rem;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.2;
    white-space: pre-wrap;
    text-align: center;
  `}
`;

export const FadeUpResultCard = styled(ResultCard)`
  ${({ theme }) => css`
    ${theme.animation.fadeUp({ duration: 0.8, move: 4 })}
  `}
`;

export const SaveAndShareContainer = styled.section`
  ${({ theme }) => css`
    ${theme.animation.fadeUp({ duration: 0.8, delay: 0.1, move: 4 })};
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 31.5rem;
    margin: 4rem 0 0;
    column-gap: 1.5rem;
    opacity: 0;
  `}
`;
