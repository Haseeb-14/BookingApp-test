import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AvailableScreen, BookingDetailScreen } from '@screens';
import { AvailableNavigationParamList, ERoutes } from '@types';

const AvailableStack = createStackNavigator<AvailableNavigationParamList>();

export const AvailableNavigator = () => {
  return (
    <AvailableStack.Navigator
      initialRouteName={ERoutes.AVAILABLE}
      screenOptions={{ headerShown: false }}
    >
      <AvailableStack.Screen name={ERoutes.AVAILABLE} component={AvailableScreen} />
      <AvailableStack.Screen name={ERoutes.BOOKING_DETAIL} component={BookingDetailScreen} />
    </AvailableStack.Navigator>
  );
};
