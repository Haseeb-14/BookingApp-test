import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { theme } from '@styles';
import { TSelectOption } from '@types';
import { InputLabel, ErrorLabel } from './input';
import { Text } from './text';

type TSelect = {
  label?: string;
  options?: TSelectOption[];
  maxHeight?: number;
  placeholder?: string;
  dropdownPosition?: 'auto' | 'top' | 'bottom';
  value?: string | null;
  onChange?: (value: string) => void;
  error?: boolean;
  errorText?: string;
};

export const Select = ({
  label,
  options,
  maxHeight,
  placeholder,
  dropdownPosition = 'auto',
  value,
  onChange,
  error,
  errorText,
}: TSelect) => {
  const renderDivider = () => {
    return <View style={[theme.globalStyles.divider]} />;
  };
  return (
    <View style={[theme.globalStyles.gap4]}>
      {label ? <InputLabel label={label} error={error} /> : null}
      <Dropdown
        style={[styles.control, error && { borderColor: theme.colors.danger }]}
        placeholderStyle={[
          theme.textVariants.body14,
          theme.textVariants.lightText,
        ]}
        selectedTextStyle={[theme.textVariants.body14, theme.textVariants.text]}
        containerStyle={styles.dropdown}
        data={options || []}
        maxHeight={maxHeight}
        labelField="label"
        valueField="value"
        dropdownPosition={dropdownPosition}
        placeholder={placeholder || 'Select'}
        value={value}
        onChange={item => {
          onChange && onChange(item.value);
        }}
        flatListProps={{
          ItemSeparatorComponent: renderDivider,
        }}
        renderItem={item => (
          <Text
            style={[
              theme.globalStyles.padding12H,
              theme.globalStyles.padding16V,
            ]}
          >
            {item.label}
          </Text>
        )}
      />
      {error ? <ErrorLabel error={errorText} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  control: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
    height: theme.spacing.base * 14,
    paddingLeft: theme.spacing[16],
    paddingRight: theme.spacing[8],
    borderRadius: theme.spacing[10],
  },
  dropdown: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.spacing[10],
    overflow: 'hidden',
  },
});
