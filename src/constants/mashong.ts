import SnowBg from '@/assets/svg/snow-bg.svg';
import MorningBg from '@/assets/svg/morning-bg.svg';
import NightBg from '@/assets/svg/night-bg.svg';
import SunsetBg from '@/assets/svgComponent/Sunset.component';

export type ControlCategory = '배경' | '간식' | '혼잣말';

export const controlCategories: ControlCategory[] = ['배경', '간식', '혼잣말'];

export const backgroundOptions = [
  {
    ImageComponent: NightBg,
    option: 'night',
  },
  {
    ImageComponent: SunsetBg,
    option: 'sunset',
  },
  {
    ImageComponent: MorningBg,
    option: 'morning',
  },
  {
    ImageComponent: SnowBg,
    option: 'snow',
  },
] as const;
