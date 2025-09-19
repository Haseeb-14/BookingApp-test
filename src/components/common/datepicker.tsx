import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import { format } from 'date-fns';
import { theme } from '@styles/theme';
import { InputLabel, ErrorLabel } from './input';
import { Text } from './text';

type TDatePicker = {
  label?: string;
  placeholder?: string;
  mode?: 'date' | 'datetime' | 'time';
  maxDate?: Date;
  minDate?: Date;
  value?: Date;
  onChangeDate?: (date: Date) => void;
  style?: ViewStyle;
  editable?: boolean;
  error?: boolean;
  errorText?: string;
};

export const DatePicker = ({
  label,
  placeholder = 'Select',
  mode = 'date',
  maxDate,
  minDate,
  value,
  onChangeDate,
  style,
  editable = true,
  error,
  errorText,
}: TDatePicker) => {
  const showDatePicker = () => {
    SheetManager.show('datepicker', {
      payload: {
        date: value,
        minDate,
        maxDate,
        onChangeDate,
      },
    });
  };

  return (
    <>
      <View style={[theme.globalStyles.gap4, style]}>
        {label ? <InputLabel label={label} error={error} /> : null}
        <TouchableOpacity
          disabled={!editable}
          style={[
            styles.selectWrapper,
            !!error && { borderColor: theme.colors.danger },
            editable === false && { backgroundColor: theme.colors.border },
          ]}
          onPress={showDatePicker}
        >
          {!value ? (
            <Text
              style={[theme.textVariants.body14, theme.textVariants.lightText]}
            >
              {placeholder}
            </Text>
          ) : (
            <Text
              style={[
                theme.textVariants.body14,
                { color: error ? theme.colors.danger : theme.colors.text },
              ]}
            >
              {format(
                value,
                mode === 'date'
                  ? 'P'
                  : mode === 'datetime'
                  ? `L hh:mm a`
                  : `hh:mm a`,
              )}
            </Text>
          )}
        </TouchableOpacity>
        {error && <ErrorLabel error={errorText} />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  selectWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: theme.spacing[16],
    paddingVertical: 0,
    height: theme.spacing.base * 14,
    borderRadius: theme.spacing[10],
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
