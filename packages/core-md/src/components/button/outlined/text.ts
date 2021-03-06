/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInTextTheme, ButtonProps } from '@reflex-ui/core';

import { getAllVariantsButtonTextStyle } from '../all-variants/text';

export const outlinedButtonTextTheme: BuiltInTextTheme<ButtonProps> = {
  getStyle: getAllVariantsButtonTextStyle,
};
