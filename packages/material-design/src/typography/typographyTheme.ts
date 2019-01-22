/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  FontWeight,
  getFontWeight,
  getSizedMarginStyle,
  getSizedPaddingStyle,
  getThemedColor,
  isWeb,
  OptionalTypographyTheme,
  rawTypographyTheme,
  TextStyleGetter,
  TypographyProps,
  TypographyTheme,
} from '@reflex-ui/core';
import merge from 'lodash/merge';
import { Platform, TextStyle } from 'react-native';

import { sizedSpacing } from '../spacing/sizedSpacing';
import { getFontFamily } from './';

export const getCommonTypographyStyle: TextStyleGetter<
  TypographyProps
> = props => ({
  ...getSizedMarginStyle(sizedSpacing)(props),
  ...getSizedPaddingStyle(sizedSpacing)(props),
  color: getThemedColor({
    colorTheme: props.colorTheme,
    onColor: true,
    paletteTheme: props.paletteTheme,
  }),
  fontFamily: getFontFamily(),
  fontWeight: getFontWeight(FontWeight.REGULAR),
  ...Platform.select({
    web: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
    },
  }),
});

export const partialTypographyTheme: OptionalTypographyTheme = {
  appBarTitle: {
    getStyle: (props): TextStyle => ({
      ...getCommonTypographyStyle(props),
      fontSize: 20,
      fontWeight: getFontWeight(FontWeight.MEDIUM),
      letterSpacing: 0.15,
      marginTop: isWeb ? -1 : 0,
      overflow: 'hidden',
    }),
  },
  caption: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 12,
      letterSpacing: 0.4,
    }),
  },
  headline1: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 96,
      fontWeight: getFontWeight(FontWeight.LIGHT),
      letterSpacing: -1.5,
    }),
  },
  headline2: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 60,
      fontWeight: getFontWeight(FontWeight.LIGHT),
      letterSpacing: -0.5,
    }),
  },
  headline3: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 48,
      letterSpacing: 0,
    }),
  },
  headline4: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 34,
      letterSpacing: 0.25,
    }),
  },
  headline5: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 24,
      letterSpacing: 0,
    }),
  },
  headline6: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 20,
      fontWeight: getFontWeight(FontWeight.MEDIUM),
      letterSpacing: 0.15,
    }),
  },
  overline: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 10,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    }),
  },
  paragraph1: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 16,
      letterSpacing: 0.5,
    }),
  },
  paragraph2: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 14,
      letterSpacing: 0.25,
    }),
  },
  subtitle1: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 16,
      letterSpacing: 0.15,
    }),
  },
  subtitle2: {
    getStyle: props => ({
      ...getCommonTypographyStyle(props),
      fontSize: 14,
      fontWeight: getFontWeight(FontWeight.MEDIUM),
      letterSpacing: 0.1,
    }),
  },
};

export const typographyTheme: TypographyTheme = merge(
  {},
  rawTypographyTheme,
  partialTypographyTheme,
);
