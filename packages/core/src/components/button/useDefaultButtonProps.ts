/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { usePalette } from '../../color/Palette';
import { usePaletteColor } from '../../color/PaletteColor';
import { Size } from '../../sizing/Size';
// tslint:disable-next-line:max-line-length
import { useDefaultTouchableSurfaceProps } from '../touchable-surface/useDefaultTouchableSurfaceProps';
import { ButtonProps, ButtonPropsOptional } from './ButtonProps';
import { ButtonTheme } from './ButtonTheme';
import { ButtonVariant } from './ButtonVariant';
import { getButtonVariantColor } from './getButtonVariantColor';

export const useDefaultButtonProps = (
  props: ButtonPropsOptional,
  theme: ButtonTheme,
): ButtonProps => {
  const { palette } = usePalette();
  const paletteColorCtxValue = usePaletteColor();
  let paletteColor = paletteColorCtxValue && paletteColorCtxValue.paletteColor;

  const variant: ButtonVariant = props.variant || ButtonVariant.Default;

  paletteColor =
    props.paletteColor ||
    paletteColor ||
    getButtonVariantColor(variant, palette);

  const contained =
    variant === ButtonVariant.Default ||
    variant === ButtonVariant.Icon ||
    variant === ButtonVariant.Outlined ||
    variant === ButtonVariant.OutlinedShaped
      ? false
      : true;

  const marginHorizontal: Size | number =
    variant === ButtonVariant.Fab ||
    variant === ButtonVariant.XFab ||
    variant === ButtonVariant.Icon
      ? 0
      : Size.M;

  const marginVertical: Size | number =
    variant === ButtonVariant.Fab ||
    variant === ButtonVariant.XFab ||
    variant === ButtonVariant.Icon
      ? 0
      : Size.S;

  return {
    ...useDefaultTouchableSurfaceProps(props, theme),
    contained,
    /*
     * marginHorizontal and marginVertical are more specific
     * than margin, so we check it here to avoid overriding
     * users' margin when provided.
     */
    ...((props.margin && {}) || { marginHorizontal, marginVertical }),
    /**/
    paletteColor,
    size: props.size || Size.M,
    variant,
  };
};
