/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { rawAppBarVariantsTheme } from '../app-bar/rawAppBarTheme';
import { rawButtonTheme } from '../button/rawButtonTheme';
import { ComponentsTheme } from '../ComponentsTheme';
import { rawListItemTheme } from '../list-item/rawListItemTheme';
import { rawListTheme } from '../list/rawListTheme';
import { rawSurfaceTheme } from '../surface/rawSurfaceTheme';
import { rawFlexSvgVariantsTheme } from '../svg/rawFlexSvgTheme';
import { rawRfxTextVariantsTheme } from '../text/rawRfxTextVariantsTheme';
// tslint:disable-next-line:max-line-length
import { rawTouchableSurfaceTheme } from '../touchable-surface/rawTouchableSurfaceTheme';
import { rawSuperViewVariantsTheme } from '../view/rawSuperViewTheme';

export const rawComponentsTheme: ComponentsTheme = {
  appBar: rawAppBarVariantsTheme,
  button: rawButtonTheme,
  list: rawListTheme,
  listItem: rawListItemTheme,
  surface: rawSurfaceTheme,
  svg: rawFlexSvgVariantsTheme,
  text: rawRfxTextVariantsTheme,
  touchableSurface: rawTouchableSurfaceTheme,
  views: rawSuperViewVariantsTheme,
};
