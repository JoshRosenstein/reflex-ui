/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { containedButtonTheme } from '../contained/theme';
import { getRaisedButtonSurfaceTheme } from './container';

export const partialRaisedButtonTheme: Partial<ButtonTheme> = {
  surface: getRaisedButtonSurfaceTheme,
};

export const raisedButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, containedButtonTheme, partialRaisedButtonTheme);
