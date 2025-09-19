import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '@screens';
import { ERoutes, ProfileNavigationParamList } from '@types';

const ProfileStack = createStackNavigator<ProfileNavigationParamList>();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName={ERoutes.PROFILE}
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name={ERoutes.PROFILE} component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
