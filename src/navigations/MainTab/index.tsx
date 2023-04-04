import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from 'screens/home/HomeScreen';
import {MainTabParamList} from './types';
import SurfingScreen from 'screens/surfing/SurfingScreen';
import LikedScreen from 'screens/liked/LikedScreen';
import MyScreen from 'screens/my/MyScreen';
import SvgIcon from 'components/@base/SvgIcon';
import colors from 'common/styles/colors';

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.gray[200],
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <SvgIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Surfing" component={SurfingScreen} />
      <Tab.Screen
        name="Liked"
        component={LikedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <SvgIcon name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My"
        component={MyScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <SvgIcon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
