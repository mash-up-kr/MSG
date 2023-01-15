import { Button } from '@/components/common';
import { ResultCard } from '@/components/result';
import { Platform, PLATFORM_NAME_MAP } from '@/constants/platform';
import { useRef } from 'react';
import useDownloadElementToImage from '@/hooks/useDownloadElementToImage';
import useWebShare from '@/hooks/useWebShare';
import { copyToClipboard } from '@/utils/clipboard';
import { ROUTES } from '@/constants/route';
import { toPng } from 'html-to-image';
import { color } from '@/styles/theme/color';
import * as Styled from './ResultCardSection.styled';

interface ResultCardSectionProps {
  platformName: Platform;
}

const ResultCardSection = ({ platformName }: ResultCardSectionProps) => {
  const resultCardRef = useRef<HTMLDivElement>(null);
  const resultFileName = `mashong${PLATFORM_NAME_MAP[platformName]}.png`;

  const { handleSaveImage } = useDownloadElementToImage(resultCardRef, resultFileName);
  const { isSupported, share } = useWebShare();

  const handleShareImage = () => {
    if (!isSupported) {
      copyToClipboard(`${window.location.origin}${ROUTES.home}`);
    } else {
      if (!resultCardRef.current) return;

      toPng(resultCardRef.current, {
        cacheBust: true,
        width: 480,
        height: 720,
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: color.black,
        },
      }).then(async (dataUrl) => {
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const file = new File([blob], resultFileName, { type: blob.type });

        share({ files: [file] });
      });
    }
  };

  return (
    <Styled.ResultCardSection>
      <Styled.EffectText>쨔-잔!{'\n'}매숑이 카드 완성!</Styled.EffectText>
      <ResultCard platformName={platformName} ref={resultCardRef} />
      <Styled.SaveAndShareContainer>
        <Button size="l" isSelected={false} onClick={handleSaveImage}>
          카드 저장하기
        </Button>
        <Button size="l" isSelected onClick={handleShareImage}>
          공유하기
        </Button>
      </Styled.SaveAndShareContainer>
    </Styled.ResultCardSection>
  );
};

export default ResultCardSection;
