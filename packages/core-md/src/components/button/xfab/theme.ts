/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { fabButtonTheme } from '../fab/theme';
import { xfabButtonContainerTheme } from './container';
import {
  getXfabButtonLeadingIconTheme,
  getXfabButtonTrailingIconTheme,
} from './sideIcons';

export const partialXFabButtonTheme: Partial<ButtonTheme> = {
  container: xfabButtonContainerTheme,
  getLeadingIcon: getXfabButtonLeadingIconTheme,
  getTrailingIcon: getXfabButtonTrailingIconTheme,
};

export const xfabButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, fabButtonTheme, partialXFabButtonTheme);
