import { TextProps } from 'react-native';
import { PrimitiveTheme } from '../PrimitiveTheme';

export type TextTheme<ComponentProps> = PrimitiveTheme<
  ComponentProps,
  TextProps
>;

export type OptionalTextTheme<ComponentProps> = Partial<
  TextTheme<ComponentProps>
>;