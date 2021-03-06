/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet, ViewStyle } from 'react-native';

export const createElevationShadowStyle = (style: ViewStyle) => ({
  backgroundColor: style.backgroundColor,
  borderRadius: style.borderRadius,
  ...StyleSheet.absoluteFillObject,
});
