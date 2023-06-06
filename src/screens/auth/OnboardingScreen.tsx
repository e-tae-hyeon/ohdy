import Onboarding from 'components/Auth/template/Onboarding';
import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <View className="flex-1">
        <Onboarding />
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen;
