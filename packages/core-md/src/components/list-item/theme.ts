/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  getSizedMarginStyle,
  getSizedPaddingStyle,
  ListItemProps,
  ListItemTheme,
  SizedData,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewStyle } from 'react-native';

import { getSizingStyle } from '../../sizing/getSizingStyle';
import { sizedSpacing } from '../../spacing/sizedSpacing';

export const listItemContainerSizedStyle: SizedData<ViewStyle> = {
  xxsmall: { minHeight: 32 },
  /*
   * Sorting values by size here makes it easier to reason about
   * the overall scale of values than sorting alphabetically,
   * so let's just disable this rule here.
   */
  // tslint:disable-next-line:object-literal-sort-keys
  xsmall: { minHeight: 40 },
  small: { minHeight: 48 },
  medium: { minHeight: 56 },
  large: { minHeight: 64 },
  xlarge: { minHeight: 72 },
  xxlarge: { minHeight: 88 },
};

export const getListItemContainerStyle: ViewStyleGetter<
  ListItemProps
> = props => ({
  ...listItemContainerSizedStyle[props.size],
  alignItems: 'center',
  backgroundColor: 'transparent',
  flexDirection: 'row',
  paddingHorizontal: 8,
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizedPaddingStyle(sizedSpacing)(props),
  ...getSizingStyle(props),
});

export const listItemTheme: ListItemTheme = {
  getStyle: getListItemContainerStyle,
};
