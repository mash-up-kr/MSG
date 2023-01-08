import Snow from '@/assets/svg/snow-bg.svg';
import Sunset from '@/assets/svgComponent/Sunset.component';
import Morning from '@/assets/svg/morning-bg.svg';
import Night from '@/assets/svg/night-bg.svg';
import Coffee from '@/assets/svg/coffee-bottom.svg';
import Beer from '@/assets/svg/beer-bottom.svg';
import Wine from '@/assets/svg/wine-bottom.svg';
import Energy from '@/assets/svg/energy-bottom.svg';
import * as Styled from './PreviewSection.styled';

const backgroundWindows = {
  snow: Snow,
  night: Night,
  sunset: Sunset,
  morning: Morning,
  black50: null,
};
const snacks = { coffee: Coffee, beer: Beer, wine: Wine, energy: Energy };

export type PreviewBackgroundColor = 'night' | 'sunset' | 'morning' | 'snow' | 'black50';
export type PreviewSnack = 'coffee' | 'beer' | 'wine' | 'energy' | null;
interface PreviewSectionProps {
  backgroundColor: PreviewBackgroundColor;
  snack: PreviewSnack;
  isVisibleTalkMySelf: boolean;
}

const PreviewSection = ({ backgroundColor, snack, isVisibleTalkMySelf }: PreviewSectionProps) => {
  const SnackImage = snack ? snacks[snack] : null;
  const BackgroundWindowImage = backgroundWindows[backgroundColor];

  return (
    <Styled.PreviewSection>
      <Styled.MarginBox />
      <Styled.Paragraph>매숑이의 {'\n'}작업 환경을 만들어주세요</Styled.Paragraph>
      <Styled.Preview>
        <Styled.PreviewBackground backgroundColor={backgroundColor}>
          {backgroundColor !== 'black50' && (
            <Styled.BackgroundWindowWrapper>
              <BackgroundWindowImage />
            </Styled.BackgroundWindowWrapper>
          )}
        </Styled.PreviewBackground>
        <Styled.Mashong />
        <Styled.MacBook />
        <Styled.SnackWrapper>{snack && <SnackImage />}</Styled.SnackWrapper>
        {isVisibleTalkMySelf && (
          <Styled.Bubble>
            <Styled.TalkMySelfInput placeholder="혼잣말 입력해죠" />
            <Styled.BubbleTail />
          </Styled.Bubble>
        )}
      </Styled.Preview>
    </Styled.PreviewSection>
  );
};

export default PreviewSection;
