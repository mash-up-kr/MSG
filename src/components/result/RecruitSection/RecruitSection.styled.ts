import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';

export const RecruitAnchor = styled.a`
  ${({ theme }) => css`
    ${theme.animation.fadeUp({ duration: 0.8, delay: 0.3, move: 4 })};
    margin: 3.2rem 0 4rem;
    opacity: 0;
  `}
`;

export const RecruitSection = styled.section`
  position: relative;
  width: 31.5rem;
  padding: 2rem 2.5rem;
  background: linear-gradient(
    282deg,
    #7444fc -13.2%,
    #ffbadb 29.11%,
    #7444fc 67.99%,
    #100431 101.16%
  );
  border-radius: 1.6rem;
`;

export const RecruitSchedule = styled.time`
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.2;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    margin-top: 0.2rem;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.2;
    white-space: pre-wrap;
  `}
`;

export const Mashong = styled(Image)`
  position: absolute;
  right: 1.1rem;
  bottom: 0;
  width: 12rem;
  height: 10.2rem;
`;
