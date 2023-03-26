import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {} & AuthGroupParamList &
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
