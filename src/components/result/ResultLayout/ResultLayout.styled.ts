import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ResultLayout = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.content};
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
  `}
`;
