import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ResultLayout = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.zIndex.content};
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
  `}
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
