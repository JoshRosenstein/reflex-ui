/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextProps, TextStyle } from 'react-native';

import { BuiltInSimpleComponentTheme } from '../SimpleComponentTheme';
import { RfxSizedTextProps } from './RfxSizedTextProps';

export type RfxSizedTextTheme = BuiltInSimpleComponentTheme<
  RfxSizedTextProps,
  TextProps,
  TextStyle
>;
