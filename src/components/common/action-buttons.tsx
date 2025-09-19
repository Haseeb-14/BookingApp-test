import React from 'react';
import { View } from 'react-native';
import { Button } from './button';
import { theme } from '@styles/theme';

type TActionButtonsProps = {
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryPress: () => void;
  onSecondaryPress: () => void;
  primaryDisabled?: boolean;
  primaryVariant?: 'filled' | 'outlined' | 'text';
  secondaryVariant?: 'filled' | 'outlined' | 'text';
};

export const ActionButtons = ({ 
  primaryButtonText, 
  secondaryButtonText, 
  onPrimaryPress, 
  onSecondaryPress,
  primaryDisabled = false,
  primaryVariant = 'filled',
  secondaryVariant = 'outlined'
}: TActionButtonsProps) => {
  return (
    <View style={[theme.globalStyles.directionRow, theme.globalStyles.gap12, { padding: theme.spacing['16'] }]}>
      <Button
        variant={secondaryVariant}
        text={secondaryButtonText}
        onPress={onSecondaryPress}
        style={[theme.globalStyles.flex1]}
      />
      <Button
        variant={primaryVariant}
        text={primaryButtonText}
        onPress={onPrimaryPress}
        disabled={primaryDisabled}
        style={[theme.globalStyles.flex1]}
      />
    </View>
  );
};
