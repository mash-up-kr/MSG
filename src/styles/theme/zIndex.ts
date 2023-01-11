export const zIndex = {
  sphere: -5,
  default: 0,
  snack: 5,
} as const;

export type ZIndexType = typeof zIndex;
