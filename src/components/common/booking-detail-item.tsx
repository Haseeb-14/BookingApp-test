import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, CheckBox } from './';
import { theme } from '@styles/theme';

type TBookingDetailItemProps = {
  label: string;
  value: string;
  checked: boolean;
  onCheckChange: (checked: boolean) => void;
  isLink?: boolean;
  onLinkPress?: () => void;
  linkIcon?: string;
};

export const BookingDetailItem = ({ 
  label, 
  value, 
  checked, 
  onCheckChange, 
  isLink = false, 
  onLinkPress,
  linkIcon = '��'
}: TBookingDetailItemProps) => {
  return (
    <View style={[theme.globalStyles.directionRow, theme.globalStyles.justifyBetween, theme.globalStyles.alignCenter]}>
      <View style={[theme.globalStyles.flex1]}>
        <Text style={[theme.textVariants.body14Bold, theme.textVariants.text]}>{label}</Text>
        {isLink ? (
          <TouchableOpacity onPress={onLinkPress}>
            <Text style={[theme.textVariants.body14, { color: theme.colors.primary }]}>
              {value}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={[theme.textVariants.body14, theme.textVariants.lightText]}>{value}</Text>
        )}
      </View>
      {isLink ? (
        <TouchableOpacity onPress={onLinkPress}>
          <View style={{
            width: 20,
            height: 20,
            ...theme.globalStyles.horizontalCenter
          }}>
            <Text style={[theme.textVariants.body14, { color: theme.colors.primary }]}>{linkIcon}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <CheckBox
          value={checked}
          onChangeValue={onCheckChange}
        />
      )}
    </View>
  );
};
