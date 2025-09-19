import type { NavigatorScreenParams } from '@react-navigation/native';

export enum ERoutes {
  AUTH = 'AUTH',
  MAIN = 'MAIN',

  WELCOME = 'WELCOME',
  LOGIN = 'LOGIN',
  CREATE_ACCOUNT = 'CREATE_ACCOUNT',
  CREATE_PASSWORD = 'CREATE_PASSWORD',
  LEARN_MORE = 'LEARN_MORE',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  CONNECT_PILLBOX = 'CONNECT_PILLBOX',
  PAIR_DEVICE = 'PAIR_DEVICE',
  ONBOARDING_COMPLETE = 'ONBOARDING_COMPLETE',

  TODAY_STACK = 'TODAY_STACK',
  CALENDAR_STACK = 'CALENDAR_STACK',
  MEDICATION_STACK = 'MEDICATION_STACK',
  SCHEDULE_STACK = 'SCHEDULE_STACK',
  PROFILE_STACK = 'PROFILE_STACK',

  TODAY = 'TODAY',

  CALENDAR = 'CALENDAR',

  MEDICATION = 'MEDICATION',

  SCHEDULE = 'SCHEDULE',

  PROFILE = 'PROFILE',
}

export type AuthNavigationParamList = {
  [ERoutes.WELCOME]: undefined;
  [ERoutes.LOGIN]: undefined;
  [ERoutes.CREATE_ACCOUNT]: undefined;
  [ERoutes.CREATE_PASSWORD]: undefined;
  [ERoutes.LEARN_MORE]: undefined;
  [ERoutes.PRIVACY_POLICY]: undefined;
  [ERoutes.CONNECT_PILLBOX]: undefined;
  [ERoutes.PAIR_DEVICE]: undefined;
  [ERoutes.ONBOARDING_COMPLETE]: undefined;
};

export type TodayNavigationParamList = {
  [ERoutes.TODAY]: undefined;
};

export type CalendarNavigationParamList = {
  [ERoutes.CALENDAR]: undefined;
};

export type MedicationNavigationParamList = {
  [ERoutes.MEDICATION]: undefined;
};

export type ScheduleNavigationParamList = {
  [ERoutes.SCHEDULE]: undefined;
};

export type ProfileNavigationParamList = {
  [ERoutes.PROFILE]: undefined;
};

export type MainBottomNavigationParamList = {
  [ERoutes.TODAY_STACK]: NavigatorScreenParams<TodayNavigationParamList>;
  [ERoutes.CALENDAR_STACK]: NavigatorScreenParams<CalendarNavigationParamList>;
  [ERoutes.MEDICATION_STACK]: NavigatorScreenParams<MedicationNavigationParamList>;
  [ERoutes.SCHEDULE_STACK]: NavigatorScreenParams<ScheduleNavigationParamList>;
  [ERoutes.PROFILE_STACK]: NavigatorScreenParams<ProfileNavigationParamList>;
};

export type RootNavigationParamList = {
  [ERoutes.AUTH]: NavigatorScreenParams<AuthNavigationParamList>;
  [ERoutes.MAIN]: NavigatorScreenParams<MainBottomNavigationParamList>;
};
