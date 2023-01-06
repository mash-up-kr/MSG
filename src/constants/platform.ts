import { ValueOf } from '@/types/helper';

export const platforms = {
  design: 'design',
  web: 'web',
  android: 'android',
  ios: 'ios',
  node: 'node',
  spring: 'spring',
} as const;

export type PlatformKey = ValueOf<typeof platforms>;
