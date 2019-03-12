/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonTheme } from '@reflex-ui/core';
import merge from 'lodash/merge';

import { animatedDefaultButtonContainerTheme } from './animatedContainer';
import { defaultButtonTheme } from './theme';

export const partialAnimatedDefaultButtonTheme: Partial<ButtonTheme> = {
  container: animatedDefaultButtonContainerTheme,
};

export const animatedDefaultButtonTheme: ButtonTheme = merge<
  {},
  ButtonTheme,
  Partial<ButtonTheme>
>({}, defaultButtonTheme, partialAnimatedDefaultButtonTheme);
