import { Button, ConfirmModalDialog, Toast } from '@/components/common';
import { Platform, PLATFORM_NAME_MAP } from '@/constants/platform';
import { useRef, useState } from 'react';
import useDownloadElementToImage from '@/hooks/useDownloadElementToImage';
import useCopyToClipboard from '@/hooks/useCopyClipboard';
import useWebShare from '@/hooks/useWebShare';
import toast from 'react-hot-toast';
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
  const { isSupported, share } = useWebShare();

  const { copy } = useCopyToClipboard(BASE_URL, {
    onSuccess: () => {
      toast.custom(({ id }) => <Toast status="success" content="링크 복사 완료!" id={id} />, {
        duration: 1500,
      });
    },
    onError: () => {
      toast.custom(({ id }) => <Toast status="error" content="다시 시도해주세요!" id={id} />, {
        duration: 1500,
      });
    },
    onComplete: () => {
      setIsOpenCopyLinkModal(false);
    },
  });

  const handleSaveImage = () => {
    saveImage();
  };

  const handleShareLink = () => {
    if (!isSupported) {
      setIsOpenCopyLinkModal(true);
    } else {
      share({ url: BASE_URL });
    }
  };

  return (
    <>
      <Styled.ResultCardSection>
        <Styled.EffectText>연봉아 올라라{'\n'}내 직군 카드 완성!</Styled.EffectText>
        <Styled.FadeUpResultCard platformName={platformName} ref={resultCardRef} />
        <Styled.SaveAndShareContainer>
          <Button size="l" isSelected={false} onClick={handleSaveImage}>
            카드 저장하기
          </Button>
          <Button size="l" isSelected onClick={handleShareLink}>
            공유하기
          </Button>
        </Styled.SaveAndShareContainer>
      </Styled.ResultCardSection>
      {isOpenCopyLinkModal && (
        <ConfirmModalDialog
          heading="링크 복사하기"
          paragraph={`${BASE_URL}이${'\n'}클립보드에 복사됩니다`}
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
