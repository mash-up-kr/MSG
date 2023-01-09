import { KeyOf } from '@/types/helper';

export const PLATFORMS = {
  design: 'design',
  web: 'web',
  android: 'android',
  ios: 'ios',
  node: 'node',
  spring: 'spring',
} as const;

export type Platform = KeyOf<typeof PLATFORMS>;

export const PLATFORM_NAME_MAP = {
  design: 'Product Design',
  web: 'Web',
  android: 'Android',
  ios: 'iOS',
  node: 'Node',
  spring: 'Spring',
};
