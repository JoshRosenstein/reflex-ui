/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';

import { MissingComponentThemeError } from '../../errors';
import { useOnLayout } from '../../responsiveness/useOnLayout';
import { ComponentsTheme } from '../ComponentsTheme';
import { ComponentsThemeContext } from '../ComponentsThemeContext';
import { processComponent } from '../processComponent';
import { renderRfxTextComponent } from './renderRfxTextComponent';
import { RfxTextProps, RfxTextPropsOptional } from './RfxTextProps';
import { RfxTextTheme } from './RfxTextTheme';
import { useDefaultRfxTextPropsBase } from './useDefaultRfxTextPropsBase';

const getTheme = (
  props: RfxTextPropsOptional,
  componentsTheme: ComponentsTheme,
): RfxTextTheme => {
  if (props.theme !== undefined && props.theme !== null) return props.theme;
  if (componentsTheme.text === undefined || componentsTheme.text === null) {
    throw new MissingComponentThemeError('<Paragraph2>');
  }
  return componentsTheme.text.paragraph2;
};

let Paragraph2: React.ComponentType<RfxTextPropsOptional> = (
  props: RfxTextPropsOptional,
) => {
  const componentsTheme = useContext(ComponentsThemeContext);
  const theme = getTheme(props, componentsTheme);

  const newProps: RfxTextProps = {
    ...useDefaultRfxTextPropsBase(props),
    ...useOnLayout(props),
    theme,
  };

  return renderRfxTextComponent(newProps);
};

Paragraph2 = processComponent<RfxTextPropsOptional>(Paragraph2, {
  name: 'Paragraph2',
});

export { Paragraph2 };
