import React from 'react';
import { View } from 'react-native';
import { Text } from './text';
import { theme } from '@styles/theme';

type TRideDetailsProps = {
  rideType: string;
  passengers: number;
  luggage: number;
};

export const RideDetails = ({ rideType, passengers, luggage }: TRideDetailsProps) => {
  return (
    <View style={[theme.globalStyles.directionColumn, { marginBottom: theme.spacing['16'] }]}>
      <Text style={[theme.textVariants.body16Bold, theme.textVariants.text, { marginBottom: theme.spacing['8'] }]}>
        {rideType}
      </Text>
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.gap16]}>
        <View style={[theme.globalStyles.directionRow, theme.globalStyles.alignCenter, theme.globalStyles.gap4]}>
          <View style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: theme.colors.primary,
            ...theme.globalStyles.horizontalCenter
          }}>
            <Text style={[theme.textVariants.body10, { color: 'white' }]}>👤</Text>
          </View>
          <Text style={[theme.textVariants.body14, theme.textVariants.text]}>{passengers}</Text>
        </View>
        <View style={[theme.globalStyles.directionRow, theme.globalStyles.alignCenter, theme.globalStyles.gap4]}>
          <View style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: theme.colors.primary,
            ...theme.globalStyles.horizontalCenter
          }}>
            <Text style={[theme.textVariants.body10, { color: 'white' }]}>💼</Text>
          </View>
          <Text style={[theme.textVariants.body14, theme.textVariants.text]}>{luggage}</Text>
        </View>
      </View>
    </View>
  );
};
