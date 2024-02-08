import favicon from 'public/favicon.ico';
import ogImg from '@/assets/image/msg-og-image@2x-min.png';
import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: 'Mash-Up | ',
  defaultTitle: 'Mash-Up | 매숑이 직군 카드 만들기',
  description: '매숑이와 함께하는 연봉 쭉 쭉 오르는 내 직군 카드 만들기',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: favicon.src,
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0',
    },
    {
      name: 'keywords',
      content:
        'IT동아리, 메쉬업, 매쉬업, 매시업, mashup, mash-up, iOS, 개발동아리, android, 디자인, 디자인동아리, UX, UI, product-design, design, web, 프론트엔드, front-end, 백엔드, backend, spring, node, IT, 동아리, IT연합동아리',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://recruit-event.mash-up.kr/',
    title: '나만의 매숑이 직군 카드 만들기',
    images: [
      {
        url: ogImg.src,
        width: 800,
        height: 400,
        alt: '매숑이와 함께하는 CEO가 탐내는 내 직군 카드 만들기',
        type: 'image/png',
      },
    ],
  },
};
