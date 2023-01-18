import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SparkleSvg from '@/assets/svg/sparkle.svg';

export const EventSection = styled.section`
  ${({ theme }) => css`
    ${theme.animation.fadeUp({ duration: 0.8, delay: 0.3, move: 4 })};
    width: 31.5rem;
    padding: 2.4rem 2rem;
    background: linear-gradient(98.54deg, rgba(255, 28, 96, 0.2) 0%, rgba(82, 67, 255, 0.2) 100%);
    border-radius: 1.2rem;
    opacity: 0;
  `}
`;

export const Heading = styled.h3`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    margin-left: 2rem;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 16px;
    line-height: 1.2;
  `}
`;

export const SparkleLeft = styled(SparkleSvg)`
  position: absolute;
  top: 0.15rem;
  left: -2rem;
  width: 1.6rem;
  height: 1.6rem;
`;

export const SparkleRight = styled(SparkleSvg)`
  position: absolute;
  top: 0.15rem;
  right: -2rem;
  width: 1.6rem;
  height: 1.6rem;
  transform: scaleX(-1);
`;

export const Event = styled.div`
  margin-top: 2rem;

  &:first-of-type {
    margin-top: 1.6rem;
  }
`;

export const SubHeading = styled.h4`
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.2;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    margin-top: 0.3rem;
    color: ${theme.color.white};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.2;
    white-space: pre-wrap;
    opacity: 0.5;

    &:first-of-type {
      margin-top: 0.4rem;
    }
  `}
`;
