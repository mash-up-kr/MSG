import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HomeLayout = styled.main`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.content};
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 66.2rem;
    background: ${theme.color.gray900};
  `}
`;
