import { Button, ConfirmModalDialog } from '@/components/common';
import { ResultCard } from '@/components/result';
import { Platform, PLATFORM_NAME_MAP } from '@/constants/platform';
import { useRef, useState } from 'react';
import useDownloadElementToImage from '@/hooks/useDownloadElementToImage';
import { detectInAppBrowser } from '@/utils/userAgent';
import useCopyToClipboard from '@/hooks/useCopyClipboard';
import { useRouter } from 'next/router';
import * as Styled from './ResultCardSection.styled';

interface ResultCardSectionProps {
  platformName: Platform;
}

const BASE_URL = 'https://recruit-event.mash-up.kr';

const ResultCardSection = ({ platformName }: ResultCardSectionProps) => {
  const [isOpenCopyLinkModal, setIsOpenCopyLinkModal] = useState(false);
  const resultCardRef = useRef<HTMLDivElement>(null);

  const resultFileName = `mashong${PLATFORM_NAME_MAP[platformName]}.png`;
  const { saveImage } = useDownloadElementToImage(resultCardRef, resultFileName);

  const router = useRouter();
  const resultUri = BASE_URL + router.asPath;
  const { copy } = useCopyToClipboard(resultUri);

  const handleSaveImage = () => {
    if (detectInAppBrowser('KAKAO')) {
      setIsOpenCopyLinkModal(true);
      return;
    }

    saveImage();
  };

  return (
    <>
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
      {isOpenCopyLinkModal && (
        <ConfirmModalDialog
          heading={`어머 저장하러 'Safari'로${'\n'}잠시 이동할게요 >_<`}
          paragraph={`카카오톡 내부에서는 카드 저장이 안돼요ㅠ${'\n'}‘Safari’에 가서 다시 저장버튼을 눌러주세요.${'\n'}만든 카드는 유지되니까 걱정마세요!`}
          approvalButtonMessage="링크 복사"
          cancelButtonMessage="취소"
          handleApprovalButton={copy}
          handleCancelButton={() => {
            setIsOpenCopyLinkModal(false);
          }}
          setIsOpenModal={setIsOpenCopyLinkModal}
        />
      )}
    </>
  );
};

export default ResultCardSection;
