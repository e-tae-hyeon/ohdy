import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  MainTab: undefined;
  PlaceDetail: {id: number};
} & AuthGroupParamList &
  CreateProfileGroupParamList &
  SearchGroupParamList;

export type AuthGroupParamList = {
  Auth: undefined;
  Email: undefined;
  VerifyCode: undefined;
};

export type CreateProfileGroupParamList = {
  UserInfo: undefined;
  Nickname: undefined;
  Keywords: undefined;
};

export type SearchGroupParamList = {
  Search: undefined;
  CategoryResult: {category: string};
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type AuthGroupNavigationProp =
  NativeStackNavigationProp<AuthGroupParamList>;

export type CreateProfileGroupNavigationProp =
  NativeStackNavigationProp<CreateProfileGroupParamList>;

export type SearchGroupNavigationProp =
  NativeStackNavigationProp<SearchGroupParamList>;

export type PlaceDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PlaceDetail'
>;

export type CategoryResultScreenRouteProp = RouteProp<
  SearchGroupParamList,
  'CategoryResult'
>;
