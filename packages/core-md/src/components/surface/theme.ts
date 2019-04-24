/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getColor,
  SurfaceProps,
  SurfaceTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getCommonRfxViewContainerStyle } from '../view/theme';

export const getSurfaceContainerStyle: ViewStyleGetter<
  SurfaceProps
> = props => ({
  backgroundColor: getColor(props),
  borderRadius: 4,
  flexWrap: 'wrap',
  ...getCommonRfxViewContainerStyle(props),
});

export const surfaceTheme: SurfaceTheme = {
  getStyle: getSurfaceContainerStyle,
};
