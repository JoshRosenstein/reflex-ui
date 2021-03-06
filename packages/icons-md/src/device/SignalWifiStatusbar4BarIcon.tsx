import React from 'react';
// tslint:disable-next-line:ordered-imports
import { Svg, Path } from 'react-native-svg';

import {
  processComponent,
  RfxSvgIcon,
  RfxSvgPropsOptional,
} from '@reflex-ui/core';

let SignalWifiStatusbar4BarIcon: React.ComponentType<RfxSvgPropsOptional> = (
  props: RfxSvgPropsOptional,
) => (
  <RfxSvgIcon {...props}>
    <Svg viewBox="0 0 26 24">
      <Path d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z" />
    </Svg>
  </RfxSvgIcon>
);

SignalWifiStatusbar4BarIcon = processComponent<RfxSvgPropsOptional>(
  SignalWifiStatusbar4BarIcon,
  {
    name: 'SignalWifiStatusbar4BarIcon',
  },
);
export { SignalWifiStatusbar4BarIcon };
