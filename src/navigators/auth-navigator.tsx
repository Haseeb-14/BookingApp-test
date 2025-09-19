import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  WelcomeScreen,
  LoginScreen,
  CreateAccountScreen,
  CreatePasswordScreen,
  LearnMoreScreen,
  PrivacyPolicyScreen,
  ConnectPillBoxScreen,
  PairDeviceScreen,
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
        name={ERoutes.CREATE_ACCOUNT}
        component={CreateAccountScreen}
      />
      <AuthStack.Screen
        name={ERoutes.CREATE_PASSWORD}
        component={CreatePasswordScreen}
      />
      <AuthStack.Screen name={ERoutes.LEARN_MORE} component={LearnMoreScreen} />
      <AuthStack.Screen
        name={ERoutes.PRIVACY_POLICY}
        component={PrivacyPolicyScreen}
      />
      <AuthStack.Screen
        name={ERoutes.CONNECT_PILLBOX}
        component={ConnectPillBoxScreen}
      />
      <AuthStack.Screen
        name={ERoutes.PAIR_DEVICE}
        component={PairDeviceScreen}
      />
      <AuthStack.Screen
        name={ERoutes.ONBOARDING_COMPLETE}
        component={OnboardingCompleteScreen}
      />
    </AuthStack.Navigator>
  );
};
