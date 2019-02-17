import * as React from 'react';
// @ts-ignore Could not find a declaration file for module 'swgs'.
// tslint:disable-next-line:import-name
import Svg, { Path } from 'swgs';

import {
  OptionalFlexSvgProps,
  reflexComponent,
  SvgIcon,
} from '@reflex-ui/core';

export const SignalWifiStatusbarConnectedNoInternet4Icon = reflexComponent<
  OptionalFlexSvgProps
>({
  name: 'SignalWifiStatusbarConnectedNoInternet4Icon',
})((props: OptionalFlexSvgProps) => (
  <SvgIcon {...props}>
    <Svg viewBox="0 0 26 24">
      <Path d="M22 22h2v-2h-2v2zM13 2C5.74 2 .9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24l1.35-1.68C25.1 5.96 20.26 2 13 2zm9 16h2v-8h-2v8z" />
    </Svg>
  </SvgIcon>
));
