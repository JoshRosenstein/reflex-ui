/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  createPaletteColorInteraction,
  fromOnColorOnlyPaletteColor,
  invertPaletteColor,
  PaletteColor,
} from '@reflex-ui/core';

// prettier-ignore
import {
  createContainedPaletteColorVariant,
} from '../../createContainedPaletteColorVariant';
// prettier-ignore
import {
  createUncontainedPaletteColorVariant,
} from '../../createUncontainedPaletteColorVariant';
import { black } from '../black/black';
import { disabledGrey300_500 } from '../disabled/contained/disabledGrey300_500';
import { disabledGrey500 } from '../disabled/uncontained/disabledGrey500';
// tslint:disable-next-line:max-line-length
import { disabledGrey600_500_600 } from '../disabled/uncontained/disabledGrey600_500_600';
import { MaterialPaletteColorItem } from '../MaterialPaletteColorItem';

export const white = '#fff';

const regularContainedBaseColor: PaletteColor = {
  dark: {
    color: white,
    onColor: black,
  },
  light: {
    color: white,
    onColor: black,
  },
  normal: {
    color: white,
    onColor: black,
  },
};

const regularUncontainedBaseColor: PaletteColor = {
  dark: {
    color: white,
    onColor: white,
  },
  light: {
    color: white,
    onColor: white,
  },
  normal: {
    color: white,
    onColor: white,
  },
};

export const mdWhite: MaterialPaletteColorItem = {
  color: {
    inverted: {
      contained: createPaletteColorInteraction({
        baseColor: invertPaletteColor(regularContainedBaseColor),
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: createPaletteColorInteraction({
        baseColor: fromOnColorOnlyPaletteColor(regularContainedBaseColor),
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledGrey600_500_600,
      }),
    },
    regular: {
      contained: createPaletteColorInteraction({
        baseColor: regularContainedBaseColor,
        colorVariantFactory: createContainedPaletteColorVariant,
        disabledColor: disabledGrey300_500,
      }),
      uncontained: createPaletteColorInteraction({
        baseColor: regularUncontainedBaseColor,
        colorVariantFactory: createUncontainedPaletteColorVariant,
        disabledColor: disabledGrey500,
      }),
    },
  },
  name: 'White',
};
