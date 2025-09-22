import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
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
        tabBarLabelStyle: [theme.textVariants.body10, { marginTop: 4 }],
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarStyle: {
          paddingBottom: 4,
          paddingTop: 12,
          paddingHorizontal: 20,
        },
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
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
      <Icons.BottomTabTodayIcon
        stroke={focused ? theme.colors.white : theme.colors.muted}
      />
    </View>
  );
};

const BookingsIcon = ({ focused }: { focused: boolean }) => {
  return (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
      <Icons.BottomTabCalendarIcon
        stroke={focused ? theme.colors.white : theme.colors.muted}
      />
    </View>
  );
};

const ProfileIcon = ({ focused }: { focused: boolean }) => {
  return (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
      <Icons.BottomTabProfileIcon
        stroke={focused ? theme.colors.white : theme.colors.muted}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  activeIconContainer: {
    backgroundColor: theme.colors.primary,
  },
});
