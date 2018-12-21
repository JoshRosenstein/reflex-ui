/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { black } from '../black';
import { MaterialPaletteColor } from '../MaterialPaletteColor';
import { white } from '../white';

export const green600: MaterialPaletteColor = {
  color: {
    dark: {
      color: '#00701a',
      onColor: white,
    },
    light: {
      color: '#76d275',
      onColor: black,
    },
    normal: {
      color: '#43a047',
      onColor: black,
    },
  },
  name: 'Green',
  tone: '600',
};
