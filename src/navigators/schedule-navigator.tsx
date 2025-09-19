import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScheduleScreen } from '@screens';
import { ERoutes, ScheduleNavigationParamList } from '@types';

const ScheduleStack = createStackNavigator<ScheduleNavigationParamList>();

export const ScheduleNavigator = () => {
  return (
    <ScheduleStack.Navigator
      initialRouteName={ERoutes.SCHEDULE}
      screenOptions={{ headerShown: false }}
    >
      <ScheduleStack.Screen
        name={ERoutes.SCHEDULE}
        component={ScheduleScreen}
      />
    </ScheduleStack.Navigator>
  );
};
