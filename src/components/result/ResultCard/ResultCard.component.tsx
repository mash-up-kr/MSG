import Android from '@/assets/svg/android.svg';
import ios from '@/assets/svg/ios.svg';
import Web from '@/assets/svg/web.svg';
import Node from '@/assets/svg/node.svg';
import Spring from '@/assets/svg/spring.svg';
import Design from '@/assets/svg/design.svg';
import BubbleAndroid from '@/assets/svg/bubble-android.svg';
import Bubbleios from '@/assets/svg/bubble-ios.svg';
import BubbleWeb from '@/assets/svg/bubble-web.svg';
import BubbleSpring from '@/assets/svg/bubble-spring.svg';
import BubbleNode from '@/assets/svg/bubble-node.svg';
import BubbleDesign from '@/assets/svg/bubble-design.svg';
import { useRouter } from 'next/router';
import { Platform, PLATFORM_NAME_MAP } from '@/constants/platform';
import { LinearGradientSphere } from '@/components/common';
import * as Styled from './ResultCard.styled';

const platformIcons = {
  android: Android,
  ios,
  web: Web,
  node: Node,
  spring: Spring,
  design: Design,
};

const platformBubbles = {
  android: BubbleAndroid,
  ios: Bubbleios,
  web: BubbleWeb,
  node: BubbleNode,
  spring: BubbleSpring,
  design: BubbleDesign,
};

const backgroundWindows = {
  snow: Styled.Snow,
  night: Styled.Night,
  sunset: Styled.Sunset,
  morning: Styled.Morning,
  black50: null,
};
const snacks = {
  coffee: Styled.Coffee,
  beer: Styled.Beer,
  wine: Styled.Wine,
  energy: Styled.Energy,
};

export type Background = 'night' | 'sunset' | 'morning' | 'snow' | 'black50';
export type Snack = 'coffee' | 'beer' | 'wine' | 'energy' | null;

interface ResultCardProps {
  platformName: Platform;
}

const ResultCard = ({ platformName }: ResultCardProps) => {
  const router = useRouter();

  const { query } = router;

  const [background, snack, talkMySelf, isVisibleTalkMySelf, name] = [
    query.background as Background,
    query.snack as Snack,
    query.talkMySelf as string,
    query.isVisibleTalkMySelf === 'true',
    query.name as string,
  ];

  const PlatformIcon = platformIcons[platformName];
  const PlatformBubble = platformBubbles[platformName];
  const SnackImage = snack ? snacks[snack] : null;
  const BackgroundWindowImage = backgroundWindows[background];

  return (
    <Styled.ResultCardContainer platform={platformName}>
      <Styled.ResultCard>
        <Styled.PlatformIconWrapper>
          <PlatformIcon />
        </Styled.PlatformIconWrapper>
        <Styled.MashongWrapper background={background}>
          {BackgroundWindowImage && <BackgroundWindowImage />}
          <Styled.Mashong />
          <Styled.MacBook />
          {SnackImage && <SnackImage />}
          {isVisibleTalkMySelf && (
            <Styled.BubbleWrapper>
              <PlatformBubble />
              <Styled.TalkMySelf>{talkMySelf.slice(0, 8)}</Styled.TalkMySelf>
            </Styled.BubbleWrapper>
          )}
        </Styled.MashongWrapper>
        <Styled.PlatformName platform={platformName}>
          {PLATFORM_NAME_MAP[platformName]}
        </Styled.PlatformName>
        <Styled.Name>{name?.slice(0, 6)}</Styled.Name>
      </Styled.ResultCard>
      <Styled.SparkleLeftTop />
      <Styled.SparkleRightTop />
      <Styled.SparkleLeftBottom />
      <Styled.SparkleRightBottom />
      <Styled.LinearGradientSphereWrapper>
        <LinearGradientSphere platform={platformName} />
      </Styled.LinearGradientSphereWrapper>
    </Styled.ResultCardContainer>
  );
};

export default ResultCard;
