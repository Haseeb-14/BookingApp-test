import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BookingsScreen } from '@screens';
import { ERoutes, BookingsNavigationParamList } from '@types';

const BookingsStack = createStackNavigator<BookingsNavigationParamList>();

export const BookingsNavigator = () => {
  return (
    <BookingsStack.Navigator
      initialRouteName={ERoutes.BOOKINGS}
      screenOptions={{ headerShown: false }}
    >
      <BookingsStack.Screen
        name={ERoutes.BOOKINGS}
        component={BookingsScreen}
      />
    </BookingsStack.Navigator>
  );
};
