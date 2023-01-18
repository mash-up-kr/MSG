import { BaseCard } from '@/components/common';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const InteractionSection = styled.section`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;
    max-width: 76.8rem;
    height: 100%;
    background: ${theme.color.gray900};
    transform: translate3d(-50%, 0, 0);

    &::after {
      position: fixed;
      bottom: 0;
      display: block;
      width: 100%;
      height: 28.6rem;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      content: '';
    }
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 5rem;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    white-space: pre-line;
    text-align: center;
  `}
`;

export const ContentsContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.zIndex.content};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `}
`;

export const SphereContainer = styled.div`
  position: absolute;
  bottom: -30rem;
  left: 50%;
  width: 60rem;
  height: 60rem;
  transform: translateX(-50%);
`;

export const Scene = styled.div`
  perspective: 50rem;
`;

const zoomInOut = keyframes`
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const ZoomInOutContainer = styled.div`
  animation: ${zoomInOut} 2s ease-in-out forwards;
`;

const rotateCard = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const InteractiveBaseCard = styled(BaseCard)`
  animation: ${rotateCard} 2s ease-in-out;
`;

export const BlackBackground = styled.div`
  ${({ theme }) => css`
    ${theme.animation.fadeIn({ duration: 1.5, delay: 1 })};
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${theme.zIndex.content};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: ${theme.color.black};
    opacity: 0;
  `}
`;

export const AnimationEndMessage = styled.p`
  ${({ theme }) => css`
    ${theme.animation.fadeIn({ duration: 1, delay: 1.5 })};
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.2;
    white-space: pre-line;
    text-align: center;
    opacity: 0;
  `}
`;
