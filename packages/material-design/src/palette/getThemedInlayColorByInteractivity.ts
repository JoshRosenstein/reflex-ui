import { getThemedColor } from '@reflex-ui/core';
import { getInlayColorByInteractivity } from './getInlayColorByInteractivity';
// prettier-ignore
import {
  ThemedColorByInteractivityData,
} from './ThemedColorByInteractivityData';

export const getThemedInlayColorByInteractivity = ({
  colorTheme,
  interactivityType,
  paletteTheme,
}: ThemedColorByInteractivityData): string =>
  getInlayColorByInteractivity({
    color: getThemedColor({ colorTheme, paletteTheme }),
    type: interactivityType,
  });