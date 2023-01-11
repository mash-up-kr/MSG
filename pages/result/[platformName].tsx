import { NavigationBar } from '@/components/common';
import { ResultCardSection, ResultLayout, PromotionSection } from '@/components/result';
import { Platform } from '@/constants/platform';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { REGISTRATION_ROUTES } from '@/constants/route';

interface Params extends ParsedUrlQuery {
  platformName: Platform;
}

interface ResultPageProps {
  platformName: Platform;
}

const ResultPage = ({ platformName }: ResultPageProps) => {
  const router = useRouter();
  return (
    <ResultLayout>
      <NavigationBar
        rightButtonText="카드 다시 만들기"
        rightButtonColor="gray500"
        rightButtonEvent={() => {
          router.push(REGISTRATION_ROUTES.name);
        }}
        isHideBackButton
      />
      <ResultCardSection platformName={platformName} />
      <PromotionSection />
    </ResultLayout>
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

export const getStaticProps: GetStaticProps<ResultPageProps, Params> = async (context) => {
  const { platformName } = context.params!;

  return {
    props: {
      platformName,
    },
  };
};

export default ResultPage;
