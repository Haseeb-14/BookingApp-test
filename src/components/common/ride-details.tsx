import React from 'react';
import { View } from 'react-native';
import { Text } from './text';
import { theme } from '@styles/theme';
import { icons } from '@styles/icons';

type TRideDetailsProps = {
  rideType: string;
  passengers: number;
  luggage: number;
};

export const RideDetails = ({ rideType, passengers, luggage }: TRideDetailsProps) => {
  return (
    <View style={[theme.globalStyles.directionColumn, { marginBottom: theme.spacing['16'] }]}>
      <Text style={[theme.textVariants.body16, theme.textVariants.lightText, { marginBottom: theme.spacing['8'] }]}>
        {rideType}
      </Text>
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.gap16]}>
        <View style={[theme.globalStyles.directionRow, theme.globalStyles.alignCenter, theme.globalStyles.gap4]}>
       
            <icons.PassengerIcon width={17} height={17}/>
          <Text style={[theme.textVariants.body14, theme.textVariants.text]}>{passengers}</Text>
        </View>
        <View style={[theme.globalStyles.directionRow, theme.globalStyles.alignCenter, theme.globalStyles.gap4]}>
      
            <icons.BagIcon width={17} height={17}  />
          <Text style={[theme.textVariants.body14, theme.textVariants.text]}>{luggage}</Text>
        </View>
      </View>
    </View>
  );
};
