import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type MainTabParamList = {
  Home: undefined;
  Surfing: undefined;
  Liked: undefined;
  My: undefined;
};

export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;
