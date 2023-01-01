import '@emotion/react';
import { ColorType } from '@/styles/theme/color';

declare module '@emotion/react' {
  export interface Theme {
    color: ColorType;
  }
}
