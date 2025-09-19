import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  RootNavigationParamList,
  AuthNavigationParamList,
  MainBottomNavigationParamList,
  AvailableNavigationParamList,
  BookingsNavigationParamList,
  MedicationNavigationParamList,
  ProfileNavigationParamList,
} from '@types';

export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootNavigationParamList>>();

export const useAuthNavigation = () =>
  useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>();

export const useMainNavigation = () =>
  useNavigation<BottomTabNavigationProp<MainBottomNavigationParamList>>();

export const useAvailableNavigation = () =>
  useNavigation<NativeStackNavigationProp<AvailableNavigationParamList>>();

export const useBookingsNavigation = () =>
  useNavigation<NativeStackNavigationProp<BookingsNavigationParamList>>();

export const useMedicationNavigation = () =>
  useNavigation<NativeStackNavigationProp<MedicationNavigationParamList>>();

export const useProfileNavigation = () =>
  useNavigation<NativeStackNavigationProp<ProfileNavigationParamList>>();

// Default export for backward compatibility
export const useTypedNavigation = useAvailableNavigation;
