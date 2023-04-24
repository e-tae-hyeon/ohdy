import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  MainTab: undefined;
  PlaceDetail: {id: number};
  Search: undefined;
  CategoryResult: {category: string};
} & AuthGroupParamList &
  CreateProfileGroupParamList;

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

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type AuthGroupNavigationProp =
  NativeStackNavigationProp<AuthGroupParamList>;

export type CreateProfileGroupNavigationProp =
  NativeStackNavigationProp<CreateProfileGroupParamList>;

export type PlaceDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PlaceDetail'
>;

export type CategoryResultScreenRouteProp = RouteProp<
  RootStackParamList,
  'CategoryResult'
>;
