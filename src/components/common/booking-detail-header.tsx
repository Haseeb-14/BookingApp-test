import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from './text';
import { theme } from '@styles/theme';

type TBookingDetailHeaderProps = {
  currentTime: string;
  dateTime: string;
  countdown: string;
  bookingNumber: string;
  status: string;
  onBackPress: () => void;
};

export const BookingDetailHeader = ({
  currentTime,
  dateTime,
  countdown,
  bookingNumber,
  status,
  onBackPress,
}: TBookingDetailHeaderProps) => {
  return (
    <View style={[theme.globalStyles.paddingHeaderComponent]}>
      {/* Current Time */}
      <Text style={[theme.textVariants.body14, theme.textVariants.lightText, { marginBottom: theme.spacing['16'] }]}>
        {currentTime}
      </Text>

      {/* Back Button and Booking Info */}
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.alignCenter, { marginBottom: theme.spacing['16'] }]}>
        <TouchableOpacity onPress={onBackPress} style={{ marginRight: theme.spacing['12'] }}>
          <View style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: theme.colors.primary,
            ...theme.globalStyles.horizontalCenter
          }}>
            <Text style={[theme.textVariants.body14Bold, { color: 'white' }]}>←</Text>
          </View>
        </TouchableOpacity>
        <View style={[theme.globalStyles.flex1]}>
          <Text style={[theme.textVariants.body16Bold, theme.textVariants.text]}>
            {dateTime} - {countdown}
          </Text>
          <Text style={[theme.textVariants.body14, theme.textVariants.lightText]}>
            {bookingNumber}
          </Text>
        </View>
      </View>

      {/* Full Width Status Button */}
      <View style={{
        backgroundColor: theme.colors.primary,
        paddingVertical: theme.spacing['12'],
        paddingHorizontal: theme.spacing['16'],
        borderRadius: theme.borderRadius['12'],
        ...theme.globalStyles.horizontalCenter,
        ...theme.globalStyles.widthFull,
      }}>
        <Text style={[theme.textVariants.body16Bold, { color: 'white' }]}>
          {status.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};
