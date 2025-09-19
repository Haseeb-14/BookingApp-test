import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import DatePicker from 'react-native-date-picker';
import { useActionSheet } from '@hooks';
import { theme } from '@styles/theme';
import { Text } from './text';
import { Space } from './space';

export type TActionSheetDatePicker = {
  date?: Date;
  maxDate?: Date;
  minDate?: Date;
  mode?: 'date' | 'time' | 'datetime';
  onChangeDate?: (date: Date) => void;
};

export const ActionSheetDatePicker = ({
  payload,
}: SheetProps<'datepicker'>) => {
  const {
    date: initialDate,
    maxDate,
    minDate,
    mode,
    onChangeDate,
  } = payload || {};
  const { getActionSheetProps } = useActionSheet();

  const [date, setDate] = useState<Date>(initialDate || new Date());

  const handleSave = () => {
    onChangeDate && onChangeDate(date);
    handleClose();
  };

  const handleClose = () => {
    SheetManager.hide('datepicker');
  };

  return (
    <ActionSheet {...getActionSheetProps()}>
      <Space space={24} />
      <View
        style={[
          theme.globalStyles.padding36H,
          theme.globalStyles.directionRow,
          theme.globalStyles.justifyEnd,
        ]}
      >
        <TouchableOpacity onPress={handleSave}>
          <Text
            style={[
              theme.textVariants.body16Medium,
              theme.textVariants.primaryText,
            ]}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[theme.globalStyles.verticalCenter]}>
        <Space space={8} />
        <DatePicker
          mode={mode || 'date'}
          maximumDate={maxDate}
          minimumDate={minDate}
          date={date}
          onDateChange={setDate}
        />
        <Space space={40} />
      </View>
    </ActionSheet>
  );
};
