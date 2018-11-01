import { ButtonProps, ViewPropsGetter, ViewStyleGetter } from '@reflex-ui/core';

export const getAllVariantsCommonButtonContainerProps: ViewPropsGetter<
  ButtonProps
> = props => ({
  style: getAllVariantsCommonButtonContainerStyle(props),
});

export const getAllVariantsCommonButtonContainerStyle: ViewStyleGetter<
  ButtonProps
> = ({ fullWidth }) => ({
  flexGrow: fullWidth ? 1 : undefined,
});
