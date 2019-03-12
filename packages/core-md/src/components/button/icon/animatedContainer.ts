/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  DefaultViewChild,
  InjectableSubTheme,
  InteractionType,
  isTouchDevice,
  ViewStyleGetter,
} from '@reflex-ui/core';
import { ViewProps, ViewStyle } from 'react-native';

import { getButtonRippleColor } from '../getButtonRippleColor';
import { withRippleEffect } from '../withRippleEffect';
import { getIconButtonContainerStyle } from './container';

export const getAnimatedIconButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => {
  const updatedProps =
    props.interactionState.type === InteractionType.Pressed
      ? {
          // tslint:disable-next-line:ter-indent
          ...props,
          // tslint:disable-next-line:ter-indent
          interactionState: {
            ...props.interactionState,
            type: isTouchDevice
              ? InteractionType.Enabled
              : InteractionType.Hovered,
          },
          // tslint:disable-next-line:ter-indent
        }
      : props;

  return getIconButtonContainerStyle(updatedProps);
};

export const animatedIconButtonContainerTheme: InjectableSubTheme<
  ButtonProps,
  ViewProps,
  ViewStyle
> = {
  component: withRippleEffect({
    getRippleColor: getButtonRippleColor,
  })(DefaultViewChild),
  getStyle: getAnimatedIconButtonContainerStyle,
};
