import { Button } from '@/components/common';
import { ResultCard } from '@/components/result';
import { Platform, PLATFORM_NAME_MAP } from '@/constants/platform';
import { useRef } from 'react';
import useDownloadElementToImage from '@/hooks/useDownloadElementToImage';
import * as Styled from './ResultCardSection.styled';

interface ResultCardSectionProps {
  platformName: Platform;
}

const ResultCardSection = ({ platformName }: ResultCardSectionProps) => {
  const resultCardRef = useRef<HTMLDivElement>(null);
  const resultFileName = `mashong${PLATFORM_NAME_MAP[platformName]}.png`;

  const { handleSaveImage } = useDownloadElementToImage(resultCardRef, resultFileName);

  return (
    <Styled.ResultCardSection>
      <Styled.EffectText>쨔-잔!{'\n'}매숑이 카드 완성!</Styled.EffectText>
      <ResultCard platformName={platformName} ref={resultCardRef} />
      <Styled.SaveAndShareContainer>
        <Button size="l" isSelected={false} onClick={handleSaveImage}>
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
