import * as React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path, Circle } from 'swgs';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let StreetviewIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 24 24">
      <Path d="M12.56 14.33c-.34.27-.56.7-.56 1.17V21h7c1.1 0 2-.9 2-2v-5.98c-.94-.33-1.95-.52-3-.52-2.03 0-3.93.7-5.44 1.83z" />
      <Circle cx={18} cy={6} r={5} />
      <Path d="M11.5 6c0-1.08.27-2.1.74-3H5c-1.1 0-2 .9-2 2v14c0 .55.23 1.05.59 1.41l9.82-9.82C12.23 9.42 11.5 7.8 11.5 6z" />
    </Svg>
  </RfxSvgIcon>
);

StreetviewIcon = processComponent<RfxSvgPropsOptional>(StreetviewIcon, {
  name: 'StreetviewIcon',
});
export { StreetviewIcon };
