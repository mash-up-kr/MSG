import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PromotionSection = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    padding: 4rem 3rem;

    &::after {
      position: absolute;
      top: 0;
      z-index: ${theme.zIndex.sphere};
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      content: '';
    }
  `}
`;
