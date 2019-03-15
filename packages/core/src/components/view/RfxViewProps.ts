/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

import { FlexboxProps } from '../../flexbox/FlexboxProps';
import { PaletteThemeProps } from '../../palette/PaletteThemeProps';
import { DimensionsProps } from '../../responsiveness/DimensionsProps';
import { ResponsivenessProps } from '../../responsiveness/ResponsivenessProps';
import { MarginProps } from '../../spacing/MarginProps';
import { PaddingProps } from '../../spacing/PaddingProps';
import { ComponentThemeGetter } from '../ComponentThemeGetter';
import { RfxViewTheme } from './RfxViewTheme';

export interface RfxViewProps
  extends DimensionsProps,
    FlexboxProps,
    MarginProps,
    PaddingProps,
    PaletteThemeProps,
    ResponsivenessProps {
  readonly children?:
    | React.ReactNode
    | ((props: RfxViewProps) => React.ReactNode);
  readonly getPatchTheme?: ComponentThemeGetter<RfxViewProps, RfxViewTheme>;
  readonly theme: RfxViewTheme;
}

export type RfxViewPropsOptional = Partial<RfxViewProps>;
