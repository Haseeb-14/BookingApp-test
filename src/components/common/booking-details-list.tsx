import React from 'react';
import { View } from 'react-native';
import { BookingDetailItem } from './booking-detail-item';
import { theme } from '@styles/theme';

type TBookingDetail = {
  key: string;
  label: string;
  value: string;
  checked: boolean;
  isLink?: boolean;
  onLinkPress?: () => void;
};

type TBookingDetailsListProps = {
  details: TBookingDetail[];
  onCheckChange: (key: string, checked: boolean) => void;
};

export const BookingDetailsList = ({ details, onCheckChange }: TBookingDetailsListProps) => {
  return (
    <View style={[theme.globalStyles.directionColumn, theme.globalStyles.gap16]}>
      {details.map((detail) => (
        <BookingDetailItem
          key={detail.key}
          label={detail.label}
          value={detail.value}
          checked={detail.checked}
          onCheckChange={(checked) => onCheckChange(detail.key, checked)}
          isLink={detail.isLink}
          onLinkPress={detail.onLinkPress}
        />
      ))}
    </View>
  );
};
