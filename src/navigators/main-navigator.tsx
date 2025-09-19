import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons as Icons, theme } from '@styles';
import { MainBottomNavigationParamList, ERoutes } from '@types';
import { AvailableNavigator } from './available-navigator';
import { BookingsNavigator } from './bookings-navigator';
import { ProfileNavigator } from './profile-navigator';

const MainTab = createBottomTabNavigator<MainBottomNavigationParamList>();

export const MainNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName={ERoutes.AVAILABLE_STACK}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: [theme.textVariants.body10],
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
      }}
    >
      <MainTab.Screen
        name={ERoutes.AVAILABLE_STACK}
        component={AvailableNavigator}
        options={{
          tabBarIcon: AvailableIcon,
          tabBarLabel: 'Available',
        }}
      />
      <MainTab.Screen
        name={ERoutes.BOOKINGS_STACK}
        component={BookingsNavigator}
        options={{
          tabBarIcon: BookingsIcon,
          tabBarLabel: 'My bookings',
        }}
      />
      <MainTab.Screen
        name={ERoutes.PROFILE_STACK}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ProfileIcon,
          tabBarLabel: 'Profile',
        }}
      />
    </MainTab.Navigator>
  );
};

const AvailableIcon = ({ focused }: { focused: boolean }) => {
  return (
    <Icons.BottomTabTodayIcon
      stroke={focused ? theme.colors.primary : theme.colors.text}
    />
  );
};

const BookingsIcon = ({ focused }: { focused: boolean }) => {
  return (
    <Icons.BottomTabCalendarIcon
      stroke={focused ? theme.colors.primary : theme.colors.text}
    />
  );
};

const ProfileIcon = ({ focused }: { focused: boolean }) => {
  return (
    <Icons.BottomTabProfileIcon
      stroke={focused ? theme.colors.primary : theme.colors.text}
    />
  );
};
