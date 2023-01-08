import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MashongSvg from '@/assets/svg/mashong.svg';
import MacBookSvg from '@/assets/svg/macbook.svg';
import BubbleSvg from '@/assets/svg/bubble-tail.svg';
import { PreviewBackgroundColor } from './PreviewSection.component';

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
  height: 4.5vh;
  min-height: 3rem;
  max-height: 6rem;
`;

export const Preview = styled.div`
  position: relative;
  width: 22.6rem;
  height: 24rem;
  margin: 8.867vh auto 0;
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

export const PreviewBackground = styled.div<{ backgroundColor: PreviewBackgroundColor }>`
  ${({ theme, backgroundColor }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: ${theme.color[backgroundColor]};
    border-radius: 10.85rem 10.85rem 0px 0px;
  `}
`;

export const BackgroundWindowWrapper = styled.div`
  position: absolute;
  top: 5.4rem;
  right: 3.2rem;
`;

export const SnackWrapper = styled.span`
  position: absolute;
  right: 1rem;
  bottom: 0;
  height: 4.8rem;
`;

export const Bubble = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 4rem;
    left: -1rem;
    width: 10.4rem;
    height: 3rem;
    padding: 0.8rem;
    background: ${theme.color.gray700};
    border: 0;
    border-radius: 2rem;
  `}
`;

export const BubbleTail = styled(BubbleSvg)`
  position: absolute;
  right: 3.3rem;
  bottom: -0.8rem;
`;

export const TalkMySelfInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
    background: transparent;
    border: 0;
    outline: 0;

    &:focus {
      border: 0;
    }

    &::placeholder {
      color: ${theme.color.gray500};
    }
  `}
`;
