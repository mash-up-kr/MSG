import CoffeeSvg from '@/assets/svg/coffee-bottom.svg';
import BeerSvg from '@/assets/svg/beer-bottom.svg';
import WineSvg from '@/assets/svg/wine-bottom.svg';
import EnergySvg from '@/assets/svg/energy-bottom.svg';
import * as Styled from './PreviewSection.styled';

const snacks = { coffee: CoffeeSvg, beer: BeerSvg, wine: WineSvg, energy: EnergySvg };

export type PreviewBackgroundColor = 'night' | 'sunset' | 'morning' | 'snow' | 'black50';
export type PreviewSnack = 'coffee' | 'beer' | 'wine' | 'energy' | null;
interface PreviewSectionProps {
  backgroundColor: PreviewBackgroundColor;
  snack: PreviewSnack;
  isVisibleTalkMySelf: boolean;
}

const PreviewSection = ({ backgroundColor, snack, isVisibleTalkMySelf }: PreviewSectionProps) => {
  const SnackImage = snack ? snacks[snack] : null;
  return (
    <Styled.PreviewSection>
      <Styled.MarginBox />
      <Styled.Paragraph>매숑이의 {'\n'}작업 환경을 만들어주세요</Styled.Paragraph>
      <Styled.MarginBox />
      <Styled.Preview>
        <Styled.PreviewBackground backgroundColor={backgroundColor} />
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
