import { OptionalButtonTheme } from '@reflex-ui/core';
import {
  allVariantsButtonTheme,
  containedButtonTheme,
  containedShapedButtonTheme,
  defaultButtonTheme,
  fabButtonTheme,
  iconButtonTheme,
  outlinedButtonTheme,
  outlinedShapedButtonTheme,
  raisedButtonTheme,
  xfabButtonTheme,
} from './';

export const buttonTheme: OptionalButtonTheme = {
  allVariants: allVariantsButtonTheme,
  contained: containedButtonTheme,
  containedShaped: containedShapedButtonTheme,
  default: defaultButtonTheme,
  fab: fabButtonTheme,
  highlighted: raisedButtonTheme,
  icon: iconButtonTheme,
  outlined: outlinedButtonTheme,
  outlinedShaped: outlinedShapedButtonTheme,
  xfab: xfabButtonTheme,
};
