import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { theme } from '@styles';

export const Text = (props: TextProps) => {
  const { children, style, ...otherProps } = props;

  return (
    <RNText
      {...otherProps}
      style={[theme.textVariants.text, theme.textVariants.body14, style]}
    >
      {children}
    </RNText>
  );
};
