import { KeyOf, ValueOf } from '@/types/helper';

export const platforms = {
  DESIGN: 'design',
  WEB: 'web',
  ANDROID: 'android',
  iOS: 'ios',
  NODE: 'node',
  SPRING: 'spring',
} as const;

export type PlatformUpperCase = KeyOf<typeof platforms>;
export type PlatformLowerCase = ValueOf<typeof platforms>;
