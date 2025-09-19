import React from 'react';
import { theme } from '@styles';
import { icons as RawIcons } from '@styles';

const EyeOnIcon = (props: React.SVGAttributes<SVGElement>) => {
  return <RawIcons.EyeOnIcon fill={theme.colors.textLight} {...props} />;
};

const EyeOffIcon = (props: React.SVGAttributes<SVGElement>) => {
  return <RawIcons.EyeOffIcon fill={theme.colors.textLight} {...props} />;
};

export const Icons = {
  EyeOnIcon,
  EyeOffIcon,
};
