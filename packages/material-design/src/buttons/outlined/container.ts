/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonProps,
  OptionalInteractiveSubTheme,
  OptionalSizedSubTheme,
  OptionalViewTheme,
  ViewPropsGetter,
  ViewStyleGetter,
} from '@reflex-ui/core';

import { getDefaultButtonContainerStyle } from '../default/container';
import { getDefaultButtonTextStyle } from '../default/text';

export const getOutlinedButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getOutlinedButtonContainerStyle(props),
});

export const getOutlinedButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = props => ({
  ...getDefaultButtonContainerStyle(props),
  borderColor: getDefaultButtonTextStyle(props).color,
});

export const outlinedButtonContainerTheme: OptionalSizedSubTheme<
  OptionalInteractiveSubTheme<OptionalViewTheme<ButtonProps>>
> = {
  allSizes: {
    allStates: {
      getProps: getOutlinedButtonContainerProps,
    },
  },
  large: {
    allStates: {
      props: {
        style: {
          borderWidth: 2,
          paddingHorizontal: 18,
        },
      },
    },
  },
  medium: {
    allStates: {
      props: {
        style: {
          borderWidth: 2,
          paddingHorizontal: 14,
        },
      },
    },
  },
  small: {
    allStates: {
      props: {
        style: {
          borderWidth: 2,
          paddingHorizontal: 14,
        },
      },
    },
  },
  xlarge: {
    allStates: {
      props: {
        style: {
          borderWidth: 3,
          paddingHorizontal: 24,
        },
      },
    },
  },
  xsmall: {
    allStates: {
      props: {
        style: {
          borderWidth: 1,
          paddingHorizontal: 6,
        },
      },
    },
  },
};
