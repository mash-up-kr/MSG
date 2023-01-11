import Snow from '@/assets/svg/snow-bg.svg';
import Sunset from '@/assets/svgComponent/Sunset.component';
import Morning from '@/assets/svg/morning-bg.svg';
import Night from '@/assets/svg/night-bg.svg';
import { ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import * as Styled from './PreviewSection.styled';

const backgroundWindows = {
  snow: Snow,
  night: Night,
  sunset: Sunset,
  morning: Morning,
  black50: null,
};
const snacks = {
  coffee: Styled.Coffee,
  beer: Styled.Beer,
  wine: Styled.Wine,
  energy: Styled.Energy,
};

export type PreviewBackgroundColor = 'night' | 'sunset' | 'morning' | 'snow' | 'black50';
export type PreviewSnack = 'coffee' | 'beer' | 'wine' | 'energy' | null;
interface PreviewSectionProps {
  backgroundColor: PreviewBackgroundColor;
  snack: PreviewSnack;
  talkMySelf: string;
  isVisibleTalkMySelf: boolean;
  setTalkMySelf: Dispatch<SetStateAction<string>>;
}

const PreviewSection = ({
  backgroundColor,
  snack,
  talkMySelf,
  isVisibleTalkMySelf,
  setTalkMySelf,
}: PreviewSectionProps) => {
  const SnackImage = snack ? snacks[snack] : null;
  const BackgroundWindowImage = backgroundWindows[backgroundColor];

  const handleChangeTalkMySelf: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target;
    if (value.length > 8) return;
    setTalkMySelf(value);
  };

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
        {SnackImage && <SnackImage />}
        <Styled.Mashong />
        <Styled.MacBook />
        {isVisibleTalkMySelf && (
          <Styled.Bubble>
            <Styled.TalkMySelfInput
              value={talkMySelf}
              placeholder="혼잣말 입력해죠"
              onChange={handleChangeTalkMySelf}
            />
            <Styled.BubbleTail />
          </Styled.Bubble>
        )}
      </Styled.Preview>
    </Styled.PreviewSection>
  );
};

export default PreviewSection;
