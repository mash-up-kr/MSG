import { ChangeEventHandler, Dispatch, forwardRef, SetStateAction } from 'react';
import * as Styled from './PreviewSection.styled';

const backgroundWindows = {
  snow: Styled.Snow,
  night: Styled.Night,
  sunset: Styled.Sunset,
  morning: Styled.Morning,
  rain: Styled.Rain,
  fireWork: Styled.FireWork,
  christmas: Styled.Christmas,
  newYear: Styled.NewYear,
  black50: null,
};
const snacks = {
  coffee: Styled.Coffee,
  beer: Styled.Beer,
  wine: Styled.Wine,
  energy: Styled.Energy,
  luckybag: Styled.Luckybag,
  tree: Styled.Tree,
  sake: Styled.Sake,
  soju: Styled.Soju,
};

export type PreviewBackgroundColor =
  | 'night'
  | 'sunset'
  | 'morning'
  | 'snow'
  | 'rain'
  | 'fireWork'
  | 'christmas'
  | 'newYear'
  | 'black50';
export type PreviewSnack =
  | 'coffee'
  | 'beer'
  | 'wine'
  | 'energy'
  | 'soju'
  | 'sake'
  | 'tree'
  | 'luckybag'
  | null;
interface PreviewSectionProps {
  backgroundColor: PreviewBackgroundColor;
  snack: PreviewSnack;
  talkMySelf: string;
  isVisibleTalkMySelf: boolean;
  setTalkMySelf: Dispatch<SetStateAction<string>>;
}

const PreviewSection = forwardRef<HTMLInputElement, PreviewSectionProps>(
  ({ backgroundColor, snack, talkMySelf, isVisibleTalkMySelf, setTalkMySelf }, ref) => {
    const SnackImage = snack ? snacks[snack] : null;
    const BackgroundWindowImage =
      backgroundColor !== 'black50' ? backgroundWindows[backgroundColor] : null;

    const handleChangeTalkMySelf: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
      const { value } = target;
      if (value.length > 8) return;
      setTalkMySelf(value);
    };

    return (
      <Styled.PreviewSection>
        <Styled.Preview>
          <Styled.PreviewBackground backgroundColor={backgroundColor}>
            {BackgroundWindowImage && <BackgroundWindowImage />}
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
                ref={ref}
              />
              <Styled.BubbleTail />
            </Styled.Bubble>
          )}
        </Styled.Preview>
      </Styled.PreviewSection>
    );
  },
);

PreviewSection.displayName = 'PreviewSection';

export default PreviewSection;
