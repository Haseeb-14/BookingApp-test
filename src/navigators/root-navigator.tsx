import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootNavigationParamList, ERoutes } from '@types';
import { AuthNavigator } from './auth-navigator';
import { MainNavigator } from './main-navigator';

const RootStack = createStackNavigator<RootNavigationParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={ERoutes.AUTH} component={AuthNavigator} />
      <RootStack.Screen name={ERoutes.MAIN} component={MainNavigator} />
    </RootStack.Navigator>
  );
};
