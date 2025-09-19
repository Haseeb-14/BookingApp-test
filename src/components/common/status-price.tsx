import React from 'react';
import { View } from 'react-native';
import { Text } from './text';
import { theme } from '@styles/theme';

type TStatusPriceProps = {
  status: string;
  price: string;
  priceLabel?: string;
};

export const StatusPrice = ({ status, price, priceLabel = 'Price' }: TStatusPriceProps) => {
  return (
    <View style={[theme.globalStyles.directionRow, theme.globalStyles.justifyBetween, theme.globalStyles.alignCenter, { marginBottom: theme.spacing['16'] }]}>
      <View style={{
        backgroundColor: theme.colors.primary,
        paddingHorizontal: theme.spacing['16'],
        paddingVertical: theme.spacing['8'],
        borderRadius: theme.borderRadius['20'],
      }}>
        <Text style={[theme.textVariants.body14Bold, { color: 'white' }]}>
          {status}
        </Text>
      </View>
      <View style={[theme.globalStyles.directionColumn, theme.globalStyles.alignEnd]}>
        <Text style={[theme.textVariants.body20Bold, theme.textVariants.text]}>
          {price}
        </Text>
        <Text style={[theme.textVariants.body14, theme.textVariants.lightText]}>
          {priceLabel}
        </Text>
      </View>
    </View>
  );
};
