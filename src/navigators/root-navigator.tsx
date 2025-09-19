import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootNavigationParamList, ERoutes } from '@types';
import { AuthNavigator } from './auth-navigator';
import { MainNavigator } from './main-navigator';
import { RootState } from '@stores';

const RootStack = createStackNavigator<RootNavigationParamList>();

export const RootNavigator = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <RootStack.Screen name={ERoutes.MAIN} component={MainNavigator} />
      ) : (
        <RootStack.Screen name={ERoutes.AUTH} component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};
