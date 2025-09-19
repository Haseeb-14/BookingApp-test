import React from 'react';
import { View } from 'react-native';
import { Text } from './text';
import { theme } from '@styles/theme';

type TBookingInfoProps = {
  dateTime: string;
  bookingNumber: string;
};

export const BookingInfo = ({ dateTime, bookingNumber }: TBookingInfoProps) => {
  return (
    <View style={[theme.globalStyles.directionColumn, { marginBottom: theme.spacing['16'] }]}>
      <Text style={[theme.textVariants.body16Bold, theme.textVariants.text]}>
        {dateTime}
      </Text>
      <Text style={[theme.textVariants.body14, theme.textVariants.lightText]}>
        {bookingNumber}
      </Text>
    </View>
  );
};
