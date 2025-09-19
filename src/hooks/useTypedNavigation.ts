import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  RootNavigationParamList,
  AuthNavigationParamList,
  MainBottomNavigationParamList,
  TodayNavigationParamList,
  CalendarNavigationParamList,
  MedicationNavigationParamList,
  ProfileNavigationParamList,
} from '@types';

export const useRootNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootNavigationParamList>>();

export const useAuthNavigation = () =>
  useNavigation<NativeStackNavigationProp<AuthNavigationParamList>>();

export const useMainNavigation = () =>
  useNavigation<BottomTabNavigationProp<MainBottomNavigationParamList>>();

export const useTodayNavigation = () =>
  useNavigation<NativeStackNavigationProp<TodayNavigationParamList>>();

export const useCalendarNavigation = () =>
  useNavigation<NativeStackNavigationProp<CalendarNavigationParamList>>();

export const useMedicationNavigation = () =>
  useNavigation<NativeStackNavigationProp<MedicationNavigationParamList>>();

export const useProfileNavigation = () =>
  useNavigation<NativeStackNavigationProp<ProfileNavigationParamList>>();
