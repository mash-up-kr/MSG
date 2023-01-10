import '@emotion/react';
import { ColorType } from '@/styles/theme/color';
import { ZIndexType } from '@/styles/theme/zIndex';

declare module '@emotion/react' {
  export interface Theme {
    color: ColorType;
    zIndex: ZIndexType;
  }
}
