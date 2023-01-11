import { Button } from '@/components/common';
import { ResultCard } from '@/components/result';
import { Platform } from '@/constants/platform';
import * as Styled from './ResultCardSection.styled';

interface ResultCardSectionProps {
  platformName: Platform;
}

const ResultCardSection = ({ platformName }: ResultCardSectionProps) => {
  return (
    <Styled.ResultCardSection>
      <Styled.EffectText>쨔-잔!{'\n'}매숑이 카드 완성!</Styled.EffectText>
      <ResultCard platformName={platformName} />
      <Styled.SaveAndShareContainer>
        <Button size="l" isSelected={false}>
          카드 저장하기
        </Button>
        <Button size="l" isSelected>
          공유하기
        </Button>
      </Styled.SaveAndShareContainer>
    </Styled.ResultCardSection>
  );
};

export default ResultCardSection;
