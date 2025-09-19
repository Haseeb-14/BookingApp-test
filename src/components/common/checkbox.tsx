import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import RNCheckBox from '@react-native-community/checkbox';
import { theme } from '@styles';
import { Text } from './text';

type TCheckBox = {
  label?: string | React.ReactNode;
  rightLabel?: boolean;
  value?: boolean;
  disabled?: boolean;
  onChangeValue?: (value: boolean) => void;
};

export const CheckBox = ({
  label = '',
  rightLabel = true,
  value,
  disabled = false,
  onChangeValue,
}: TCheckBox) => {
  const handleToggle = () => {
    onChangeValue && onChangeValue(!value);
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        theme.globalStyles.horizontalYCenter,
        theme.globalStyles.gap12,
        styles.container,
      ]}
      onPress={handleToggle}
    >
      {label && !rightLabel ? (
        <>
          {typeof label === 'string' ? (
            <Text
              style={[
                theme.globalStyles.flex1,
                disabled
                  ? theme.textVariants.lightText
                  : theme.textVariants.text,
              ]}
            >
              {label}
            </Text>
          ) : (
            label
          )}
        </>
      ) : null}
      <RNCheckBox
        boxType="circle"
        disabled={disabled}
        animationDuration={0}
        tintColor={disabled ? theme.colors.muted : theme.colors.text}
        tintColors={{
          true: disabled ? theme.colors.muted : theme.colors.primary,
          false: disabled ? theme.colors.muted : theme.colors.text,
        }}
        onCheckColor={theme.colors.white}
        onFillColor={theme.colors.primary}
        onTintColor={theme.colors.primary}
        style={styles.checkbox}
        value={value}
      />
      {label && rightLabel ? (
        <>
          {typeof label === 'string' ? (
            <Text
              style={[
                theme.globalStyles.flex1,
                theme.textVariants.body14,
                disabled
                  ? theme.textVariants.lightText
                  : theme.textVariants.text,
              ]}
            >
              {label}
            </Text>
          ) : (
            label
          )}
        </>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:
      Platform.OS === 'ios' ? theme.spacing[2] : theme.spacing[12],
  },
  checkbox: {
    width: theme.spacing[20],
    height: theme.spacing[20],
    pointerEvents: 'none',
  },
});
