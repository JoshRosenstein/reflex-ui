/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';

import { getContainedButtonSurfaceTheme } from './container';
import {
  getContainedButtonLeadingIconTheme,
  getContainedButtonTrailingIconTheme,
} from './sideIcons';
import { containedButtonTextTheme } from './text';

export const containedButtonTheme: ButtonTheme = {
  getLeadingIcon: getContainedButtonLeadingIconTheme,
  getTrailingIcon: getContainedButtonTrailingIconTheme,
  surface: getContainedButtonSurfaceTheme,
  text: containedButtonTextTheme,
};
