export const stylesComposer = (className, styles) =>
  className?.split(' ').map((e) => styles[e]);
