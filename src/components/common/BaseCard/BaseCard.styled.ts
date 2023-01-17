import TwinkleSvg from '@/assets/svg/twinkle.svg';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import HiddenMashongSvg from '@/assets/svg/hidden-mashong.svg';

const shakeCard = keyframes`
  from {
    transform: rotate(-6deg);
  }
  to {
    transform: rotate(6deg);
  }
`;

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
    animation: ${shakeCard} 2s infinite alternate ease-in-out;
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
      background: ${theme.color.mashup};
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

export const Introduction = styled.p`
  flex-grow: 1;
  margin-top: 2.4rem;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.7rem;
  text-align: center;
`;
