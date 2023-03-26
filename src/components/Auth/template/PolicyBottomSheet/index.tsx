import {useNavigation} from '@react-navigation/native';
import {register} from 'apis/auth';
import {PRIVACY_POLICY_URI, TERM_OF_USE_URI} from 'common/constants/string';
import AppText from 'components/@base/AppText';
import BottomSheet from 'components/@base/BottomSheet';
import Btn from 'components/@base/Btn';
import FlexContainer from 'components/@base/FlexContainer';
import useToast from 'hooks/useToast';
import {AuthGroupNavigationProp} from 'navigations/RootStack/types';
import React from 'react';
import {Linking} from 'react-native';
import {Pressable, View} from 'react-native';
import useAuthStore from 'stores/useAuthStore';
import {getErrorMessage} from 'utils/error';

function PolicyBottomSheet() {
  const {registerType, email, isVisiblePolicySheet, closePolicySheet} =
    useAuthStore();
  const {showToast} = useToast();
  const {navigate} = useNavigation<AuthGroupNavigationProp>();

  const handleLink = (uri: string) => {
    Linking.openURL(uri);
  };

  const handlePress = async () => {
    try {
      switch (registerType) {
        case 'local': {
          await register({type: registerType, email});
          break;
        }
        case 'social': {
        }
        default:
          break;
      }
      closePolicySheet();
      navigate('UserInfo');
    } catch (err) {
      showToast({type: 'error', message: getErrorMessage(err)});
    }
  };

  return (
    <BottomSheet isVisible={isVisiblePolicySheet}>
      <FlexContainer gapSize="large">
        <FlexContainer>
          <AppText typoStyle="H3" align="center">
            다음을 읽고 동의해주세요.
          </AppText>
          <View className="flex-row justify-center">
            <Pressable
              onPress={() => handleLink(PRIVACY_POLICY_URI)}
              className="border-b">
              <AppText typoStyle="Link">개인정보 처리방침</AppText>
            </Pressable>
            <AppText> 및 </AppText>
            <Pressable
              onPress={() => handleLink(TERM_OF_USE_URI)}
              className="border-b">
              <AppText typoStyle="Link">서비스 이용약관</AppText>
            </Pressable>
          </View>
        </FlexContainer>
        <Btn label="동의하고 회원가입" onPress={handlePress} />
      </FlexContainer>
    </BottomSheet>
  );
}

export default PolicyBottomSheet;
