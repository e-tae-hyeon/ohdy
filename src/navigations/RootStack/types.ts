import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Loading: undefined;
  MainTab: undefined;
  PlaceDetail: {id: number};
} & AuthGroupParamList &
  CreateProfileGroupParamList &
  SearchGroupParamList &
  SettingsGroupParamList;

export type AuthGroupParamList = {
  Onboarding: undefined;
  Auth: undefined;
  Email: undefined;
  VerifyCode: undefined;
};

export type CreateProfileGroupParamList = {
  Nickname: undefined;
  Keywords: undefined;
};

export type SearchGroupParamList = {
  Search: undefined;
  CategoryResult: {category: string};
};

export type SettingsGroupParamList = {
  Settings: undefined;
  Feedback: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type AuthGroupNavigationProp =
  NativeStackNavigationProp<AuthGroupParamList>;

export type CreateProfileGroupNavigationProp =
  NativeStackNavigationProp<CreateProfileGroupParamList>;

export type SearchGroupNavigationProp =
  NativeStackNavigationProp<SearchGroupParamList>;

export type SettingsGroupNavigationProp =
  NativeStackNavigationProp<SettingsGroupParamList>;

export type PlaceDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PlaceDetail'
>;

export type CategoryResultScreenRouteProp = RouteProp<
  SearchGroupParamList,
  'CategoryResult'
>;
