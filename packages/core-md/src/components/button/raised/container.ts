/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  InjectableSubTheme,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewProps, ViewStyle } from 'react-native';

import { getLowElevationStylesByInteraction } from '../../../elevation';
import { getAllVariantsButtonContainerProps } from '../all-variants/container';
import { getContainedButtonContainerStyle } from '../contained/container';

export const getRaisedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getContainedButtonContainerStyle(props),
  ...getLowElevationStylesByInteraction(props.interactionState.type),
});

export const raisedButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = {
  getProps: getAllVariantsButtonContainerProps,
  getStyle: getRaisedButtonContainerStyle,
};
