/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  ButtonSubProps,
  ButtonSubPropsGetter,
  ButtonVariant,
  ColorTheme,
  InteractivityType,
  Row,
} from '@reflex-ui/core';
import {
  disabledPaletteColor,
  getInlayColorByInteractivity,
} from '@reflex-ui/material-design';
import * as React from 'react';

import { ButtonShowcaseScreen } from './ButtonShowcaseScreen';
import { LabelButtonCollection } from './LabelButtonCollection';

const getContainedButtonProps: ButtonSubPropsGetter = (
  props: ButtonProps,
): ButtonSubProps => ({
  container: {
    style: {
      backgroundColor:
        // prettier-ignore
        props.interactivityState.type === InteractivityType.DISABLED
          ? disabledPaletteColor.normal.color
          : getInlayColorByInteractivity({
            color: '#c70ad0',
            type: props.interactivityState.type,
          }),
    },
  },
});

const ContainedButtonShowcaseScreen: React.SFC = (): JSX.Element => (
  <ButtonShowcaseScreen
    ButtonCollection={LabelButtonCollection}
    title="Button: Contained"
    variant={ButtonVariant.CONTAINED}
  >
    <Row>
      <LabelButtonCollection
        colorTheme={ColorTheme.SURFACE_NORMAL}
        getSubProps={getContainedButtonProps}
        title="Custom color"
        variant={ButtonVariant.CONTAINED}
      />
    </Row>
  </ButtonShowcaseScreen>
);

ContainedButtonShowcaseScreen.displayName = 'ContainedButtonShowcaseScreen';

export { ContainedButtonShowcaseScreen };
