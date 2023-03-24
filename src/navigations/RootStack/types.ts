import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {} & AuthGroupParamList;

export type AuthGroupParamList = {
  Auth: undefined;
  Email: undefined;
  VerifyCode: undefined;
  UserInfo: undefined;
  Nickname: undefined;
  Keywords: undefined;
};

export type AuthGroupNavigationProp =
  NativeStackNavigationProp<AuthGroupParamList>;
