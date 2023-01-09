import { KeyOf } from '@/types/helper';
import { PLATFORMS } from './platform';

export const ROUTES = {
  home: '/',
  generate: '/generate',
  result: '/result',
} as const;

export const GENERATE_ROUTES = {
  ios: `${ROUTES.generate}/${PLATFORMS.ios}`,
  android: `${ROUTES.generate}/${PLATFORMS.android}`,
  design: `${ROUTES.generate}/${PLATFORMS.design}`,
  web: `${ROUTES.generate}/${PLATFORMS.web}`,
  spring: `${ROUTES.generate}/${PLATFORMS.spring}`,
  node: `${ROUTES.generate}/${PLATFORMS.node}`,
} as const;

export const RESULT_ROUTES = {
  ios: `${ROUTES.result}/${PLATFORMS.ios}`,
  android: `${ROUTES.result}/${PLATFORMS.android}`,
  design: `${ROUTES.result}/${PLATFORMS.design}`,
  web: `${ROUTES.result}/${PLATFORMS.web}`,
  spring: `${ROUTES.result}/${PLATFORMS.spring}`,
  node: `${ROUTES.result}/${PLATFORMS.node}`,
} as const;

export type Route = KeyOf<typeof ROUTES>;
export type GenerateRoute = KeyOf<typeof ROUTES>;
export type ResultRoute = KeyOf<typeof ROUTES>;
