import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { theme } from '@styles';

type TButton = {
  Icon?: React.ComponentType<React.SVGAttributes<SVGElement>>;
  variant?: 'filled' | 'outlined' | 'text';
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  text: string | React.ReactNode;
  textUnderline?: boolean;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  // Color props
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
};

export const Button = ({
  Icon,
  variant = 'filled',
  disabled = false,
  loading = false,
  onPress,
  text,
  style,
  textStyle: customTextStyle,
  backgroundColor,
  textColor: customTextColor,
  borderColor,
}: TButton) => {
  let containerStyle: ViewStyle = {};
  let textStyle: TextStyle = {};
  let textColor: string = '';
  
  if (variant === 'outlined') {
    containerStyle = {
      borderWidth: 1,
      borderColor: borderColor || (disabled ? theme.colors.muted : theme.colors.primary),
      backgroundColor: backgroundColor || theme.colors.white,
      height: theme.spacing.base * 14,
      borderRadius: theme.spacing[10],
    };
    textStyle = theme.textVariants.body16Semi;
    textColor = customTextColor || (disabled ? theme.colors.muted : theme.colors.text);
  } else if (variant === 'filled') {
    containerStyle = {
      backgroundColor: backgroundColor || (disabled ? theme.colors.muted : theme.colors.primary),
      height: theme.spacing.base * 14,
      borderRadius: theme.spacing[10],
    };
    textStyle = theme.textVariants.body16Semi;
    textColor = customTextColor || theme.colors.white;
  } else if (variant === 'text') {
    containerStyle = { height: 'auto' };
    textColor = customTextColor || (disabled ? theme.colors.muted : theme.colors.primary);
    textStyle = theme.textVariants.body16Semi;
  }
  textStyle = { ...textStyle, color: textColor };

  const renderText = () => {
    return (
      <View
        style={[theme.globalStyles.horizontalCenter, theme.globalStyles.gap8]}
      >
        {loading ? (
          <ActivityIndicator color={textColor} size="small" />
        ) : null}
        {Icon && <Icon stroke={textColor} fill={textColor} />}
        <Text
          style={[theme.textVariants.body14Semi, textStyle, customTextStyle]}
        >
          {text}
        </Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[styles.container, containerStyle, style]}
      onPress={onPress}
    >
      {renderText()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...theme.globalStyles.horizontalCenter,
    paddingHorizontal: theme.spacing[20],
    overflow: 'hidden',
  },
});
