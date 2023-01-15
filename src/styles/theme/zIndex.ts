export const zIndex = {
  background: -10,
  sphere: -5,
  default: 0,
  content: 5,
  snack: 10,
  modal: 15,
  dialog: 20,
} as const;

export type ZIndexType = typeof zIndex;
