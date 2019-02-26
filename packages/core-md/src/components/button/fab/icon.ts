/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  rawButtonIconSubTheme,
  SubTheme,
  SvgPropsGetter,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { getAllVariantsButtonIconProps } from '../all-variants/icon';
import { getContainedButtonTextColorStyle } from '../contained/text';

export const getFabButtonIconStyle: SvgPropsGetter<ButtonProps> = props => ({
  ...getAllVariantsButtonIconProps(props),
  color: getContainedButtonTextColorStyle(props).color,
});

export const fabButtonIconTheme: SubTheme<
  ButtonProps,
  SvgProps,
  ViewStyle
> = merge({}, rawButtonIconSubTheme, {
  getStyle: getFabButtonIconStyle,
});