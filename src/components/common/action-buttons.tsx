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
  // Color props for buttons
  primaryBackgroundColor?: string;
  primaryTextColor?: string;
  primaryBorderColor?: string;
  secondaryBackgroundColor?: string;
  secondaryTextColor?: string;
  secondaryBorderColor?: string;
};

export const ActionButtons = ({ 
  primaryButtonText, 
  secondaryButtonText, 
  onPrimaryPress, 
  onSecondaryPress,
  primaryDisabled = false,
  primaryVariant = 'filled',
  secondaryVariant = 'outlined',
  primaryBackgroundColor = theme.colors.primary,
  primaryTextColor = theme.colors.white,
  primaryBorderColor,
  secondaryBackgroundColor = theme.colors.buttonDark,
  secondaryTextColor = theme.colors.white,
  secondaryBorderColor,
}: TActionButtonsProps) => {
  return (
    <View style={[theme.globalStyles.directionRow, theme.globalStyles.gap12, { padding: theme.spacing['16'] }]}>
      <Button
        variant={secondaryVariant}
        text={secondaryButtonText}
        onPress={onSecondaryPress}
        style={[theme.globalStyles.flex1]}
        backgroundColor={secondaryBackgroundColor}
        textColor={secondaryTextColor}
        borderColor={secondaryBorderColor}
      />
      <Button
        variant={primaryVariant}
        text={primaryButtonText}
        onPress={onPrimaryPress}
        disabled={primaryDisabled}
        style={[theme.globalStyles.flex1]}
        backgroundColor={primaryDisabled ? undefined : primaryBackgroundColor}
        textColor={primaryTextColor}
        borderColor={primaryBorderColor}
      />
    </View>
  );
};
