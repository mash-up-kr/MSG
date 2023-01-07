import * as Styled from './PreviewSection.styled';

interface PreviewSectionProps {
  backgroundColor: Styled.PreviewBackgroundColor;
}

const PreviewSection = ({ backgroundColor }: PreviewSectionProps) => {
  return (
    <Styled.PreviewSection>
      <Styled.MarginBox />
      <Styled.Paragraph>매숑이의 {'\n'}작업 환경을 만들어주세요</Styled.Paragraph>
      <Styled.MarginBox />
      <Styled.Preview>
        <Styled.PreviewBackground backgroundColor={backgroundColor} />
        <Styled.Mashong />
        <Styled.MacBook />
      </Styled.Preview>
    </Styled.PreviewSection>
  );
};

export default PreviewSection;
