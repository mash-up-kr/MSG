import { NavigationBar } from '@/components/common';
import { ControlSection, GenerateLayout, PreviewSection } from '@/components/generate';
import type {
  PreviewBackgroundColor,
  PreviewSnack,
} from '@/components/generate/PreviewSection/PreviewSection.component';
import type { PlatformKey } from '@/constants/platform';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';

interface Params extends ParsedUrlQuery {
  platformName: PlatformKey;
}

interface GeneratePageProps {
  platformName: PlatformKey;
}

const GeneratePage: NextPage<GeneratePageProps> = () => {
  const [currentBackground, setCurrentBackground] = useState<PreviewBackgroundColor>('black50');
  const [currentSnack, setCurrentSnack] = useState<PreviewSnack>(null);
  const [talkMySelf, setTalkMySelf] = useState('');
  const [isVisibleTalkMySelf, setIsVisibleTalkMySelf] = useState(false);

  return (
    <>
      <NavigationBar
        rightButtonText="다음"
        backButtonEvent={() => {}}
        rightButtonEvent={() => {}}
      />
      <GenerateLayout>
        <PreviewSection
          backgroundColor={currentBackground}
          snack={currentSnack}
          talkMySelf={talkMySelf}
          setTalkMySelf={setTalkMySelf}
          isVisibleTalkMySelf={isVisibleTalkMySelf}
        />
        <ControlSection
          currentBackground={currentBackground}
          currentSnack={currentSnack}
          isVisibleTalkMySelf={isVisibleTalkMySelf}
          setCurrentBackground={setCurrentBackground}
          setCurrentSnack={setCurrentSnack}
          setIsVisibleTalkMySelf={setIsVisibleTalkMySelf}
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
