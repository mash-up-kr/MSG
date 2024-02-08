import { css } from '@emotion/react';
import styled from '@emotion/styled';
import SparkleSvg from '@/assets/svg/sparkle.svg';
import MashongSvg from '@/assets/svg/mashong.svg';
import MacBookSvg from '@/assets/svg/macbook.svg';
import CoffeeSvg from '@/assets/svg/coffee-bottom.svg';
import BeerSvg from '@/assets/svg/beer-bottom.svg';
import { WineBottom as WineSvg } from '@/assets/svgComponent';
import EnergySvg from '@/assets/svg/energy-bottom.svg';
import LuckybagSvg from '@/assets/svg/luckybag-bottom.svg';
import TreeSvg from '@/assets/svg/tree-bottom.svg';
import SakeSvg from '@/assets/svg/sake-bottom.svg';
import SojuSvg from '@/assets/svg/soju-bottom.svg';
import SnowSvg from '@/assets/svg/snow-bg.svg';
import SunsetSvg from '@/assets/svgComponent/Sunset.component';
import MorningSvg from '@/assets/svg/morning-bg.svg';
import NightSvg from '@/assets/svg/night-bg.svg';
import RainSvg from '@/assets/svgComponent/Rain.component';
import FireWorkSvg from '@/assets/svgComponent/FireWork.component';
import ChristmasSvg from '@/assets/svgComponent/Christmas.component';
import NewYearSvg from '@/assets/svgComponent/NewYear.component';
import { Platform } from '@/constants/platform';
import { Background } from './ResultCard.component';

export const ResultCardContainer = styled.div`
  position: relative;
`;

const PLATFORM_BACKGROUND: Record<Platform, string> = {
  android: 'linear-gradient(0deg, #0F2D19 0%, #00030E 20.26%, #0F1916 99.03%)',
  ios: 'linear-gradient(0deg, #1A1E26 0%, #08000E 20.26%, #181B20 99.03%)',
  design: 'linear-gradient(0deg, #241C2D 0%, #08000E 20.26%, #1E1320 99.03%)',
  spring: 'linear-gradient(0deg, #0E2324 0%, #000E0C 20.26%, #11201B 99.03%)',
  web: 'linear-gradient(0deg, #10202F 0%, #00030E 20.26%, #151B27 99.03%)',
  node: 'linear-gradient(0deg, #2A1419 0%, #0E0300 20.26%, #281D1C 99.03%)',
};

export const ResultCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 24rem;
    height: 36rem;
    overflow: hidden;
    background: linear-gradient(${theme.color.black}, ${theme.color.black}) padding-box,
      linear-gradient(102deg, #303030 9.47%, #303030 39.77%, #ababab 60.79%, #303030 82.59%)
        border-box;
    background-origin: border-box;
    border: 0.3rem solid transparent;
    border-radius: 2rem;
  `}
`;

export const ResultCardBackground = styled.div<{ platform: Platform }>`
  ${({ platform }) => css`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${PLATFORM_BACKGROUND[platform]};
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

export const MashongWrapper = styled.div`
  position: relative;
  width: 17rem;
  height: 18rem;
  margin: 1.4rem 0 0;
  border-radius: 10.85rem 10.85rem 0px 0px;
`;

export const MashongBackground = styled.div<{ background: Background }>`
  ${({ theme, background }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${theme.color[background]};
    border-radius: 10.85rem 10.85rem 0px 0px;
  `}
`;

export const PlatformBorder = styled.div<{ platform: Platform }>`
  ${({ theme, platform }) => css`
    position: absolute;
    top: -0.6rem;
    left: 50%;
    width: 18.2rem;
    height: 19.1rem;
    overflow: hidden;
    background: ${theme.color[platform]};
    border-radius: 10.85rem 10.85rem 0px 0px;
    transform: translate3d(-50%, 0, 0);
  `}
`;

export const PlatformBorderBg = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    width: 18rem;
    height: 18.9rem;
    background: ${theme.color.black};
    border-radius: 9rem 9rem 0 0;
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
export const Rain = styled(RainSvg)`
  position: absolute;
  top: 4.05rem;
  right: 2.4rem;
  width: 3.6rem;
  height: 3.6rem;
`;
export const FireWork = styled(FireWorkSvg)`
  position: absolute;
  top: 4.05rem;
  right: 2.4rem;
  width: 3.6rem;
  height: 3.6rem;
`;
export const Christmas = styled(ChristmasSvg)`
  position: absolute;
  top: 4.05rem;
  right: 2.4rem;
  width: 3.6rem;
  height: 3.6rem;
`;
export const NewYear = styled(NewYearSvg)`
  position: absolute;
  top: 4.05rem;
  right: 2.4rem;
  width: 3.6rem;
  height: 3.6rem;
`;

export const Wine = styled(WineSvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 0.75rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
    width: 3.6rem;
    height: 3.6rem;
  `}
`;
export const Beer = styled(BeerSvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 0.75rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
    width: 3.6rem;
    height: 3.6rem;
  `}
`;
export const Coffee = styled(CoffeeSvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 0.75rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
    width: 3.6rem;
    height: 3.6rem;
  `}
`;
export const Energy = styled(EnergySvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 0.75rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
    width: 3.6rem;
    height: 3.6rem;
  `}
`;
export const Luckybag = styled(LuckybagSvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 0.75rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
    width: 3.6rem;
    height: 3.6rem;
  `}
`;
export const Tree = styled(TreeSvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 0.75rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
    width: 3.6rem;
    height: 3.6rem;
  `}
`;
export const Sake = styled(SakeSvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 0.75rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
    width: 3.6rem;
    height: 3.6rem;
  `}
`;
export const Soju = styled(SojuSvg)`
  ${({ theme }) => css`
    position: absolute;
    right: 0.75rem;
    bottom: 0;
    z-index: ${theme.zIndex.snack};
    width: 3.6rem;
    height: 3.6rem;
  `}
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
    white-space: nowrap;
    text-align: center;
    background: ${theme.color[platform]};
    border-radius: 2rem;
  `}
`;

export const Name = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    width: 100%;
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
