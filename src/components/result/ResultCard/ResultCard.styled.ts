import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SparkleSvg from '@/assets/svg/sparkle.svg';
import MashongSvg from '@/assets/svg/mashong.svg';
import MacBookSvg from '@/assets/svg/macbook.svg';
import CoffeeSvg from '@/assets/svg/coffee-bottom.svg';
import BeerSvg from '@/assets/svg/beer-bottom.svg';
import WineSvg from '@/assets/svg/wine-bottom.svg';
import EnergySvg from '@/assets/svg/energy-bottom.svg';
import SnowSvg from '@/assets/svg/snow-bg.svg';
import SunsetSvg from '@/assets/svgComponent/Sunset.component';
import MorningSvg from '@/assets/svg/morning-bg.svg';
import NightSvg from '@/assets/svg/night-bg.svg';
import { Platform } from '@/constants/platform';
import { Background } from './ResultCard.component';

export const ResultCardContainer = styled.div<{ platform: Platform }>`
  ${({ theme, platform }) => css`
    position: relative;
    width: 24rem;
    height: 36rem;
    background: ${theme.color[platform]};
    background-origin: border-box;
    border: 0.3rem solid transparent;
    border-radius: 2rem;
  `}
`;

export const ResultCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${theme.color.black};
    border-radius: 1.7rem;
  `}
`;

export const SparkleLeftTop = styled(SparkleSvg)`
  position: absolute;
  top: 1.6rem;
  left: 1.6rem;
`;
export const SparkleRightTop = styled(SparkleSvg)`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  transform: scaleX(-1);
`;
export const SparkleLeftBottom = styled(SparkleSvg)`
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
`;
export const SparkleRightBottom = styled(SparkleSvg)`
  position: absolute;
  right: 1.6rem;
  bottom: 1.6rem;
  transform: scaleX(-1);
`;

export const PlatformIconWrapper = styled.div`
  display: inline-block;
  margin-top: 1.2rem;
`;

export const Mashong = styled(MashongSvg)`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 13.35rem;
  height: 11.25rem;
  transform: translate3d(-50%, 0, 0);
`;

export const MacBook = styled(MacBookSvg)`
  position: absolute;
  bottom: 0;
  left: -1.05rem;
  width: 9.15rem;
  height: 3.6rem;
`;

export const MashongWrapper = styled.div<{ background: Background }>`
  ${({ theme, background }) => css`
    position: relative;
    width: 18rem;
    height: 18rem;
    margin: 1.4rem 0 0;
    background: ${theme.color[background]};
    border-radius: 8.1375rem 8.1375rem 0px 0px;
  `}
`;

export const Snow = styled(SnowSvg)`
  position: absolute;
  top: 4.05rem;
  right: 2.4rem;
  width: 3.6rem;
  height: 3.6rem;
`;
export const Sunset = styled(SunsetSvg)`
  position: absolute;
  top: 4.05rem;
  right: 2.4rem;
  width: 3.6rem;
  height: 3.6rem;
`;
export const Morning = styled(MorningSvg)`
  position: absolute;
  top: 4.05rem;
  right: 2.4rem;
  width: 3.6rem;
  height: 3.6rem;
`;
export const Night = styled(NightSvg)`
  position: absolute;
  top: 4.05rem;
  right: 2.4rem;
  width: 3.6rem;
  height: 3.6rem;
`;

export const Wine = styled(WineSvg)`
  position: absolute;
  right: 0.75rem;
  bottom: 0;
  width: 3.6rem;
  height: 3.6rem;
`;
export const Beer = styled(BeerSvg)`
  position: absolute;
  right: 0.75rem;
  bottom: 0;
  width: 3.6rem;
  height: 3.6rem;
`;
export const Coffee = styled(CoffeeSvg)`
  position: absolute;
  right: 0.75rem;
  bottom: 0;
  width: 3.6rem;
  height: 3.6rem;
`;
export const Energy = styled(EnergySvg)`
  position: absolute;
  right: 0.75rem;
  bottom: 0;
  width: 3.6rem;
  height: 3.6rem;
`;

export const BubbleWrapper = styled.div`
  position: absolute;
  top: 2.2rem;
  left: -1.5rem;
`;

export const TalkMySelf = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.5rem;
    padding: 0.8rem;
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 0;
  `}
`;

export const PlatformName = styled.span<{ platform: Platform }>`
  ${({ theme, platform }) => css`
    margin: 1.8rem 0 1rem;
    padding: 0.6rem 1.2rem;
    color: ${theme.color.black};
    font-weight: 800;
    font-size: 1.4rem;
    text-align: center;
    background: ${theme.color[platform]};
    border-radius: 2rem;
  `}
`;

export const Name = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.white};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.2;
    text-align: center;
  `}
`;

export const LinearGradientSphereWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -7.5rem;
    left: 50%;
    z-index: ${theme.zIndex.sphere};
    transform: translate3d(-50%, 0, 0);
  `}
`;
