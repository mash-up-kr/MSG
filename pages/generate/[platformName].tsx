import { NavigationBar } from '@/components/common';
import {
  ControlSection,
  DescriptionSection,
  GenerateLayout,
  PreviewSection,
  InteractionSection,
} from '@/components/generate';
import type {
  PreviewBackgroundColor,
  PreviewSnack,
} from '@/components/generate/PreviewSection/PreviewSection.component';
import type { Platform } from '@/constants/platform';
import { RESULT_ROUTES } from '@/constants/route';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';
import { useRef, useState } from 'react';

interface Params extends ParsedUrlQuery {
  platformName: Platform;
}

interface GeneratePageProps {
  platformName: Platform;
}

const GeneratePage: NextPage<GeneratePageProps> = ({ platformName }) => {
  const [currentBackground, setCurrentBackground] = useState<PreviewBackgroundColor>('black50');
  const [currentSnack, setCurrentSnack] = useState<PreviewSnack>(null);
  const [talkMySelf, setTalkMySelf] = useState('');
  const [isVisibleTalkMySelf, setIsVisibleTalkMySelf] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const talkMySelfRef = useRef<HTMLInputElement>(null);

  const selectedOptions = {
    background: currentBackground,
    snack: currentSnack ?? '',
    isVisibleTalkMySelf: isVisibleTalkMySelf.toString(),
    talkMySelf,
  };

  const router = useRouter();
  const name = router.query.name as string;
  const selectedOptionParams = new URLSearchParams({ ...selectedOptions, name }).toString();
  const handleGoToResultPage = () => {
    setIsGenerating(true);
    setTimeout(() => {
      router.push(`${RESULT_ROUTES[platformName]}?${selectedOptionParams}`);
    }, 2000);
  };

  const handleBackToPrevPage = () => {
    router.back();
  };

  return isGenerating ? (
    <InteractionSection />
  ) : (
    <>
      <NavigationBar
        rightButtonText="다음"
        backButtonEvent={handleBackToPrevPage}
        rightButtonEvent={handleGoToResultPage}
      />
      <GenerateLayout>
        <DescriptionSection />
        <PreviewSection
          backgroundColor={currentBackground}
          snack={currentSnack}
          talkMySelf={talkMySelf}
          setTalkMySelf={setTalkMySelf}
          isVisibleTalkMySelf={isVisibleTalkMySelf}
          ref={talkMySelfRef}
        />
        <ControlSection
          currentBackground={currentBackground}
          currentSnack={currentSnack}
          isVisibleTalkMySelf={isVisibleTalkMySelf}
          setCurrentBackground={setCurrentBackground}
          setCurrentSnack={setCurrentSnack}
          setIsVisibleTalkMySelf={setIsVisibleTalkMySelf}
          talkMySelfRef={talkMySelfRef}
        />
      </GenerateLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: [
      { params: { platformName: 'ios' } },
      { params: { platformName: 'web' } },
      { params: { platformName: 'android' } },
      { params: { platformName: 'spring' } },
      { params: { platformName: 'design' } },
      { params: { platformName: 'node' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<GeneratePageProps, Params> = async (context) => {
  const { platformName } = context.params!;

  return {
    props: {
      platformName,
    },
  };
};

export default GeneratePage;
