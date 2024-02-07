import TwinkleSvg from '@/assets/svg/twinkle.svg';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import HiddenMashongSvg from '@/assets/svgComponent/HiddenMashong.component';
import HiddenMashongDecoSvg from '@/assets/svgComponent/HiddenMashongDeco.component';
import MoonSvg from '@/assets/svgComponent/Moon.component';
import WhosNextSvg from '@/assets/svgComponent/WhosNext.component';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 24rem;
    height: 36rem;
    padding: 1.6rem;
    background: linear-gradient(${theme.color.black}, ${theme.color.black}) padding-box,
      ${theme.color.mashup} border-box;
    border: 0.2rem solid transparent;
    border-radius: 2rem;
  `}
`;

export const Twinkles = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Twinkle = styled(TwinkleSvg)<{ inverted: 'true' | 'false' }>`
  ${({ inverted }) => css`
    transform: ${inverted === 'true' ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  `}
`;

export const Background = styled.div`
  ${({ theme }) => css`
    position: relative;
    align-self: center;
    width: 18.2rem;
    height: 19.2rem;
    background: linear-gradient(${theme.color.black}, ${theme.color.black}) padding-box,
      ${theme.color.mashup} border-box;
    border: 0.1rem solid transparent;
    border-radius: 10.85rem 10.85rem 0 0;

    &::after {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      bottom: 0.5rem;
      left: 0.5rem;
      display: block;
      width: 17rem;
      height: 18rem;
      background: linear-gradient(180deg, #000 70%, #552b53 100%);
      border-radius: 10.85rem 10.85rem 0 0;
      opacity: 0.5;
      content: '';
    }
  `}
`;

export const HiddenMashong = styled(HiddenMashongSvg)`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  z-index: 5;
  transform: translateX(-50%);
`;

export const HiddenMashongDeco = styled(HiddenMashongDecoSvg)`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  z-index: 5;
  transform: translateX(-50%);
`;

export const Moon = styled(MoonSvg)`
  position: absolute;
  top: 3rem;
  left: 50%;
  z-index: 5;
  transform: translateX(-50%);
`;

export const WhosNext = styled(WhosNextSvg)`
  flex-grow: 1;
  margin: 0 auto;
`;
