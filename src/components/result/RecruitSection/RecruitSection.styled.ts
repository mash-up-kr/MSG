import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';

export const RecruitAnchor = styled.a`
  margin: 3.2rem 0 4rem;
`;

export const RecruitSection = styled.section`
  ${({ theme }) => css`
    position: relative;
    width: 31.5rem;
    padding: 2rem 2.5rem;
    background: ${theme.color.mashup};
    border-radius: 1.6rem;
  `}
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
  right: -1.6rem;
  bottom: 0;
  width: 12rem;
  height: 10.2rem;
`;
