import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  WelcomeScreen,
  LoginScreen,
 
} from '@screens';
import { AuthNavigationParamList, ERoutes } from '@types';
import { OnboardingCompleteScreen } from '@screens/onboarding-complete';

const AuthStack = createStackNavigator<AuthNavigationParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={ERoutes.WELCOME}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name={ERoutes.WELCOME} component={WelcomeScreen} />
      <AuthStack.Screen name={ERoutes.LOGIN} component={LoginScreen} />
     
      <AuthStack.Screen
        name={ERoutes.ONBOARDING_COMPLETE}
        component={OnboardingCompleteScreen}
      />
    </AuthStack.Navigator>
  );
};
