import {useMutation} from '@tanstack/react-query';
import {register} from 'apis/auth';
import {PRIVACY_POLICY_URI, TERM_OF_USE_URI} from 'common/constants/string';
import AppText from 'components/@base/AppText';
import BottomSheet from 'components/@base/BottomSheet';
import Btn from 'components/@base/Btn';
import FlexView from 'components/@base/FlexView';
import useLogin from 'hooks/useLogin';
import useToast from 'hooks/useToast';
import React from 'react';
import {Linking} from 'react-native';
import {Pressable, View} from 'react-native';
import useAuthStore from 'stores/useAuthStore';
import {getErrorMessage} from 'utils/error';

function PolicyBottomSheet() {
  const {
    registerType,
    email,
    socialRegisterData,
    isVisiblePolicySheet,
    closePolicySheet,
  } = useAuthStore();
  const {showToast} = useToast();
  const login = useLogin();

  const handleLink = (uri: string) => {
    Linking.openURL(uri);
  };

  const {mutate, isLoading} = useMutation(register, {
    onSuccess: async data => {
      await login(data);
      closePolicySheet();
    },
    onError: err => {
      closePolicySheet();
      showToast({type: 'error', message: getErrorMessage(err)});
    },
  });

  const handlePress = () => {
    switch (registerType) {
      case 'local': {
        mutate({type: 'local', email});
        break;
      }
      case 'social': {
        if (!socialRegisterData) return;
        mutate({
          type: 'social',
          provider: socialRegisterData.provider,
          socialId: socialRegisterData.socialId,
        });
      }
      default:
        break;
    }
  };

  return (
    <BottomSheet isVisible={isVisiblePolicySheet}>
      <FlexView gapSize="large" className="px-4 py-8">
        <FlexView>
          <AppText typoStyle="H3" align="center">
            다음을 읽고 동의해주세요.
          </AppText>
          <View className="flex-row justify-center">
            <Pressable
              onPress={() => handleLink(PRIVACY_POLICY_URI)}
              className="border-b">
              <AppText typoStyle="Action">개인정보 처리방침</AppText>
            </Pressable>
            <AppText> 및 </AppText>
            <Pressable
              onPress={() => handleLink(TERM_OF_USE_URI)}
              className="border-b">
              <AppText typoStyle="Action">서비스 이용약관</AppText>
            </Pressable>
          </View>
        </FlexView>
        <Btn
          label="동의하고 회원가입"
          onPress={handlePress}
          disabled={isLoading}
        />
      </FlexView>
    </BottomSheet>
  );
}

export default PolicyBottomSheet;
