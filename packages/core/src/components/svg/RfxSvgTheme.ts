/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuiltInViewTheme } from '../view/ViewTheme';
import { RfxSvgProps } from './RfxSvgProps';
import { SvgTheme } from './SvgTheme';

export interface RfxSvgTheme {
  readonly container?: BuiltInViewTheme<RfxSvgProps>;
  readonly svg?: SvgTheme<RfxSvgProps>;
}