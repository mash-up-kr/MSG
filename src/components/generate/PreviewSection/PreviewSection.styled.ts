import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MashongSvg from '@/assets/svg/mashong.svg';
import MacBookSvg from '@/assets/svg/macbook.svg';
import BubbleSvg from '@/assets/svg/bubble-tail.svg';
import CoffeeSvg from '@/assets/svg/coffee-bottom.svg';
import BeerSvg from '@/assets/svg/beer-bottom.svg';
import { WineBottom as WineSvg } from '@/assets/svgComponent';
import EnergySvg from '@/assets/svg/energy-bottom.svg';
import SnowSvg from '@/assets/svg/snow-bg.svg';
import SunsetSvg from '@/assets/svgComponent/Sunset.component';
import MorningSvg from '@/assets/svg/morning-bg.svg';
import NightSvg from '@/assets/svg/night-bg.svg';
import RainSvg from '@/assets/svgComponent/Rain.component';
import FireWorkSvg from '@/assets/svgComponent/FireWork.component';
import ChristmasSvg from '@/assets/svgComponent/Christmas.component';
import NewYearSvg from '@/assets/svgComponent/NewYear.component';
import { PreviewBackgroundColor } from './PreviewSection.component';

export const PreviewSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export const Preview = styled.div`
  position: relative;
  width: 22.6rem;
  height: 24rem;
  margin: 0 auto;
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

export const Night = styled(NightSvg)`
  position: absolute;
  top: 5.4rem;
  right: 3.2rem;
`;
export const Sunset = styled(SunsetSvg)`
  ${({ theme }) => css`
    position: absolute;
    top: 5.4rem;
    right: 3.2rem;
    background: ${theme.color.sunsetWindow};
    border-radius: 0.738rem;
  `}
`;
export const Morning = styled(MorningSvg)`
  position: absolute;
  top: 5.4rem;
  right: 3.2rem;
`;
export const Snow = styled(SnowSvg)`
  position: absolute;
  top: 5.4rem;
  right: 3.2rem;
`;
export const Rain = styled(RainSvg)`
  position: absolute;
  top: 5.4rem;
  right: 3.2rem;
`;
export const FireWork = styled(FireWorkSvg)`
  position: absolute;
  top: 5.4rem;
  right: 3.2rem;
`;
export const Christmas = styled(ChristmasSvg)`
  position: absolute;
  top: 5.4rem;
  right: 3.2rem;
`;
export const NewYear = styled(NewYearSvg)`
  position: absolute;
  top: 5.4rem;
  right: 3.2rem;
`;

export const Wine = styled(WineSvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 1rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
  `}
`;
export const Beer = styled(BeerSvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 1rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
  `}
`;
export const Coffee = styled(CoffeeSvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 1rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
  `}
`;
export const Energy = styled(EnergySvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 1rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
  `}
`;

export const Bubble = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 4rem;
    left: -1rem;
    width: 10.4rem;
    height: 3rem;
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
    width: 133.33%;
    height: 133.33%;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 1.6rem;
    text-align: center;
    background: transparent;
    border: 0;
    outline: 0;
    transform: scale(0.75);
    transform-origin: left top;
    &:focus {
      border: 0;
    }

    &::placeholder {
      color: ${theme.color.gray500};
    }
  `}
`;
