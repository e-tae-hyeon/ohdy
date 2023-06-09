import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import AuthScreen from 'screens/auth/AuthScreen';
import EmailScreen from 'screens/auth/EmailScreen';
import VerifyCodeScreen from 'screens/auth/VerifyCodeScreen';
import KeywordsScreen from 'screens/create-profile/KeywordsScreen';
import NicknameScreen from 'screens/create-profile/NicknameScreen';
import useUserStore from 'stores/useUserStore';
import {RootStackParamList} from './types';
import useMyProfile from 'hooks/useMyProfile';
import MainTab from 'navigations/MainTab';
import PlaceDetailScreen from 'screens/place/PlaceDetailScreen';
import SearchScreen from 'screens/surfing/SearchScreen';
import CategoryResultScreen from 'screens/surfing/CategoryResultScreen';
import SettingsScreen from 'screens/my/SettingsScreen';
import FeedbackScreen from 'screens/my/FeedbackScreen';
import useLoadUser from 'hooks/useLoadUser';
import OnboardingScreen from 'screens/auth/OnboardingScreen';
import useFirstLaunch from 'hooks/useFirstLaunch';
import LoadingScreen from 'screens/loading/LoadingScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const loadUser = useLoadUser();
  const launch = useFirstLaunch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await launch();
      await loadUser();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, []);

  const {user} = useUserStore();
  const profile = useMyProfile();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoading && (
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{animation: 'fade'}}
        />
      )}
      {!user ? (
        <Stack.Group>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Email" component={EmailScreen} />
          <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
        </Stack.Group>
      ) : (
        <>
          {!profile && (
            <Stack.Group>
              <Stack.Screen name="Nickname" component={NicknameScreen} />
              <Stack.Screen name="Keywords" component={KeywordsScreen} />
            </Stack.Group>
          )}
          <Stack.Group>
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen
              name="CategoryResult"
              component={CategoryResultScreen}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Feedback" component={FeedbackScreen} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
