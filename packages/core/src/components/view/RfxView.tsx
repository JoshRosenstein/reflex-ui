/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { ViewProps, ViewStyle } from 'react-native';

import { reflexComponent } from '../reflexComponent';
import { getSubProps } from '../subcomponents';
import { DefaultViewChild } from './DefaultViewChild';
import { RfxViewProps } from './RfxViewProps';

export const RfxView = reflexComponent<RfxViewProps>({
  name: 'View',
})((props: RfxViewProps) => {
  const userProps = props.getProps ? props.getProps(props) : {};

  const children =
    props.children && typeof props.children === 'function'
      ? props.children(props)
      : props.children;

  const updatedProps = {
    ...props,
    ...userProps.props,
    children,
  };

  const Container = updatedProps.theme.container.component || DefaultViewChild;

  const containerProps = getSubProps<RfxViewProps, ViewProps, ViewStyle>({
    componentProps: updatedProps,
    theme: updatedProps.theme.container,
    userProps: userProps.container,
  });

  return (
    <Container
      componentProps={updatedProps}
      onLayout={updatedProps.onLayout}
      {...containerProps}
    >
      {children}
    </Container>
  );
});
