import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CalendarScreen } from '@screens';
import { ERoutes, CalendarNavigationParamList } from '@types';

const CalendarStack = createStackNavigator<CalendarNavigationParamList>();

export const CalendarNavigator = () => {
  return (
    <CalendarStack.Navigator
      initialRouteName={ERoutes.CALENDAR}
      screenOptions={{ headerShown: false }}
    >
      <CalendarStack.Screen
        name={ERoutes.CALENDAR}
        component={CalendarScreen}
      />
    </CalendarStack.Navigator>
  );
};
