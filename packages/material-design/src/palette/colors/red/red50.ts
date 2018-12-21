/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const red50: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#ccb9bc',
      onColor: black,
    },
    light: {
      color: white,
      onColor: black,
    },
    normal: {
      color: '#ffebee',
      onColor: black,
    },
  },
  name: 'Red',
  tone: '50',
};
