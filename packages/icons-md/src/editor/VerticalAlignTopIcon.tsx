import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let VerticalAlignTopIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
    </Svg>
  </RfxSvgIcon>
);

VerticalAlignTopIcon = processComponent<RfxSvgPropsOptional>(
  VerticalAlignTopIcon,
  {
    name: 'VerticalAlignTopIcon',
  },
);
export { VerticalAlignTopIcon };
