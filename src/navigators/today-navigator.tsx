import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TodayScreen } from '@screens';
import { TodayNavigationParamList, ERoutes } from '@types';

const TodayStack = createStackNavigator<TodayNavigationParamList>();

export const TodayNavigator = () => {
  return (
    <TodayStack.Navigator
      initialRouteName={ERoutes.TODAY}
      screenOptions={{ headerShown: false }}
    >
      <TodayStack.Screen name={ERoutes.TODAY} component={TodayScreen} />
    </TodayStack.Navigator>
  );
};
