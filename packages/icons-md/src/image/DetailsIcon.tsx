import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let DetailsIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z" />
    </Svg>
  </RfxSvgIcon>
);

DetailsIcon = processComponent<RfxSvgPropsOptional>(DetailsIcon, {
  name: 'DetailsIcon',
});
export { DetailsIcon };
