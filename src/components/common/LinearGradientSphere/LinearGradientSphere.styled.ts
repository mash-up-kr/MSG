import { Platform } from '@/constants/platform';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SphereContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 15rem;
  opacity: 0.7;
`;

export const BackLight = styled.div<{ platform?: Platform }>`
  ${({ theme, platform }) => css`
    position: absolute;
    top: -0.5rem;
    width: 50rem;
    height: 50rem;
    background: ${platform ? theme.color[platform] : theme.color.mashup};
    border-radius: 50rem;
    opacity: 0.8;
    filter: blur(3.03rem);
  `}
`;

const boxShadows = {
  mashup: 'inset 0px 0px 29.8323px rgba(194, 75, 204, 0.45)',
  design: 'inset 0px 0px 29.8323px rgba(101, 75, 204, 0.45)',
  ios: 'inset 0px 0px 29.8323px rgba(167, 173, 204, 0.45)',
  android: 'inset 0px 0px 29.8323px rgba(75, 204, 111, 0.45)',
  web: 'inset 0px 0px 29.8323px rgba(75, 111, 204, 0.45)',
  spring: 'inset 0px 0px 29.8323px rgba(75, 173, 204, 0.45)',
  node: 'inset 0px 0px 29.8323px rgba(204, 75, 75, 0.45)',
} as const;

const sphereBackgrounds = {
  mashup:
    'linear-gradient(180deg, rgba(84, 41, 255, 0.3) -3.9%, rgba(108, 0, 52, 0.46) -3.89%, rgba(20, 0, 62, 0.83) 16.09%, #000000 33.78%)',
  design: 'linear-gradient(180deg, #31017F -3.9%, #000000 20.31%)',
  ios: 'linear-gradient(180deg, #494F73 -3.9%, #000000 20.31%)',
  android: 'linear-gradient(180deg, #123800 -3.9%, #000000 20.31%)',
  web: 'linear-gradient(180deg, #002358 -3.9%, #000000 20.31%)',
  spring: 'linear-gradient(180deg, #004438 -3.9%, #000000 20.31%)',
  node: 'linear-gradient(180deg, #580000 -3.9%, #000000 20.31%)',
};

export const Sphere = styled.div<{ platform?: Platform }>`
  ${({ platform }) => css`
    position: absolute;
    width: 60rem;
    height: 60rem;
    background: ${platform ? sphereBackgrounds[platform] : sphereBackgrounds.mashup};
    border-radius: 60rem;
    box-shadow: ${platform ? boxShadows[platform] : boxShadows.mashup};
  `}
`;
