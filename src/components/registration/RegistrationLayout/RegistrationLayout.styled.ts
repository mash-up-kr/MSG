import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const BackgroundTop = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    z-index: ${theme.zIndex.background};
    width: 100%;
    max-width: 76.8rem;
    height: 50%;
    background: ${theme.color.gray900};
  `}
`;

export const BackgroundBottom = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    z-index: ${theme.zIndex.background};
    width: 100%;
    max-width: 76.8rem;
    height: 50%;
    background: ${theme.color.gray900};
  `}
`;
