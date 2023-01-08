import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div<{ vh: number }>`
  ${({ vh }) => {
    const vh100 = vh * 100;

    return css`
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      max-width: 76.8rem;
      height: ${vh === 0 ? '100vh' : `${vh100}px`};
      margin: 0 auto;
    `;
  }}
`;
