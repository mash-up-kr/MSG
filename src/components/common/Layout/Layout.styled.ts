import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div<{ vh: number }>`
  ${({ theme, vh }) => {
    const vh100 = vh * 100;

    return css`
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      max-width: 76.8rem;
      height: ${vh === 0 ? '100vh' : `${vh100}px`};
      margin: 0 auto;
      background-color: ${theme.color.gray900};
    `;
  }}
`;

export const BackgroundTop = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: -100px;
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
    background: ${theme.color.gray900}; ;
  `}
`;
