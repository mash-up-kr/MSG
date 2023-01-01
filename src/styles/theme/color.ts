export const color = {
  black: '#000000',
  gray900: '#18191C',
  gray700: '#2B2F3C',
  gray500: '#495066',
  white: '#ffffff',
  mashup: 'linear-gradient(98.54deg, #FF1C60 0%, #5243FF 100%)',
  ios: 'linear-gradient(134.55deg, #4A527C 15.9%, #ADBAFF 92.94%)',
  node: 'linear-gradient(154.94deg, #FF2F61 0.01%, #FFB48A 109.79%)',
  branding: 'linear-gradient(141.58deg, #FFD702 3.14%, #FF7629 99.26%)',
  design: 'linear-gradient(135deg, #6842FF 0%, #C446FF 100%)',
  web: 'linear-gradient(111.03deg, #0A31FF 11.37%, #0AB5FF 93.31%)',
  spring: 'linear-gradient(69.27deg, #1CFF77 -1.02%, #43D2FF 110.44%)',
  android: 'linear-gradient(91.02deg, #0DA300 3.3%, #9EFF00 104.01%)',
} as const;

export type ColorType = typeof color;
