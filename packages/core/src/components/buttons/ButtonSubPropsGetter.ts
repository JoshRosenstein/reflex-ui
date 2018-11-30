/**
 * Copyright (c) Flavio Silva https://flsilva.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SubPropsGetter } from '../subcomponents';
import { ButtonProps } from './ButtonProps';
import { ButtonSubProps } from './ButtonSubProps';

export type ButtonSubPropsGetter = SubPropsGetter<ButtonProps, ButtonSubProps>;
