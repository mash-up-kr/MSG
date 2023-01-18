import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BackgroundTop = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 50%;
    z-index: ${theme.zIndex.background};
    width: 100%;
    max-width: 76.8rem;
    height: 50%;
    background: ${theme.color.gray900};
    transform: translate3d(-50%, 0, 0);
  `}
`;

export const SphereDeem = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 50%;
    z-index: ${theme.zIndex.sphere};
    width: 100%;
    height: 28.6rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    transform: translate3d(-50%, 0, 0);
  `}
`;

export const SphereContainer = styled.div`
  position: absolute;
  bottom: -30rem;
  left: 50%;
  width: 60rem;
  height: 60rem;
  transform: translate3d(-50%, 0, 0);
`;
