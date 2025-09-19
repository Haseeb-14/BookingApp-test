import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MedicationScreen } from '@screens';
import { ERoutes, MedicationNavigationParamList } from '@types';

const MedicationStack = createStackNavigator<MedicationNavigationParamList>();

export const MedicationNavigator = () => {
  return (
    <MedicationStack.Navigator
      initialRouteName={ERoutes.MEDICATION}
      screenOptions={{ headerShown: false }}
    >
      <MedicationStack.Screen
        name={ERoutes.MEDICATION}
        component={MedicationScreen}
      />
    </MedicationStack.Navigator>
  );
};
