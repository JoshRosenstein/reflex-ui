/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppBarTheme } from './AppBarTheme';

export interface AppBarVariantsTheme {
  readonly default: AppBarTheme;
  readonly dense: AppBarTheme;
  readonly prominent: AppBarTheme;
  readonly prominentDense: AppBarTheme;
}
