import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MashongSvg from '@/assets/svg/mashong.svg';
import MacBookSvg from '@/assets/svg/macbook.svg';

export const PreviewSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.2;
    white-space: pre-wrap;
    text-align: center;
  `}
`;

export const MarginBox = styled.div`
  height: 7.39vh;
  min-height: 3rem;
  max-height: 6rem;
`;

export const Preview = styled.div`
  position: relative;
  width: 22.6rem;
  height: 24rem;
  margin: 0 auto;
`;

export type PreviewBackgroundColor = 'night' | 'sunset' | 'morning' | 'snow' | 'black50';

export const PreviewBackground = styled.div<{ backgroundColor: PreviewBackgroundColor }>`
  ${({ theme, backgroundColor }) => css`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: ${theme.color[backgroundColor]};
    border-radius: 10.85rem 10.85rem 0px 0px;
  `}
`;

export const Mashong = styled(MashongSvg)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

export const MacBook = styled(MacBookSvg)`
  position: absolute;
  bottom: 0;
  left: -1.4rem;
`;
