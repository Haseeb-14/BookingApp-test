import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { icons as Icons, theme } from '@styles';
import { MainBottomNavigationParamList, ERoutes } from '@types';
import { TodayNavigator } from './today-navigator';
import { CalendarNavigator } from './calendar-navigator';
import { ProfileNavigator } from './profile-navigator';

const MainTab = createBottomTabNavigator<MainBottomNavigationParamList>();

export const MainNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName={ERoutes.TODAY_STACK}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: [theme.textVariants.body10],
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
      }}
    >
      <MainTab.Screen
        name={ERoutes.TODAY_STACK}
        component={TodayNavigator}
        options={{
          tabBarIcon: TodayIcon,
          tabBarLabel: 'Today',
        }}
      />
      <MainTab.Screen
        name={ERoutes.CALENDAR_STACK}
        component={CalendarNavigator}
        options={{
          tabBarIcon: CalendarIcon,
          tabBarLabel: 'Calendar',
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

const TodayIcon = ({ focused }: { focused: boolean }) => {
  return (
    <Icons.BottomTabTodayIcon
      stroke={focused ? theme.colors.primary : theme.colors.text}
    />
  );
};

const CalendarIcon = ({ focused }: { focused: boolean }) => {
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
