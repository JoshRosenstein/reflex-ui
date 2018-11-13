import { OptionalComponentsTheme } from '@reflex-ui/core';

import { buttonTheme } from './buttons/buttonTheme';
import { iconTheme } from './icons/iconTheme';
import { typographyTheme } from './typography/typographyTheme';

export const materialDesignTheme: OptionalComponentsTheme = {
  button: buttonTheme,
  icon: iconTheme,
  typography: typographyTheme,
};