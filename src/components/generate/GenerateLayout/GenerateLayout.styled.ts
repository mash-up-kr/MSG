import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GenerateLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  justify-content: space-between;
  height: 100%;
  max-height: 76rem;
  padding: 0rem 0 6rem;
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
