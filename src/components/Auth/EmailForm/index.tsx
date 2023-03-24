import {useNavigation} from '@react-navigation/native';
import {sendEmail} from 'apis/auth';
import AppText from 'components/@base/AppText';
import Btn from 'components/@base/Btn';
import FlexContainer from 'components/@base/FlexContainer';
import Input from 'components/@base/Input';
import KeyboardAvodingContainer from 'components/@base/KeyboardAvoidingContainer';
import useDisabled from 'hooks/useDisabled';
import useToast from 'hooks/useToast';
import {AuthGroupNavigationProp} from 'navigations/RootStack/types';
import React from 'react';
import {View} from 'react-native';
import useAuthStore from 'stores/useAuthStore';
import validator from 'validator';

function EmailForm() {
  const {email, setEmail} = useAuthStore();
  const disabled = useDisabled([validator.isEmail(email)]);
  const {showToast, hideToast} = useToast();
  const {navigate} = useNavigation<AuthGroupNavigationProp>();

  const handleSendEmail = async () => {
    try {
      hideToast();
      sendEmail(email);
      navigate('VerifyCode');
    } catch (err) {
      showToast({type: 'error', message: '잠시후 다시 시도해주세요.'});
    }
  };

  return (
    <KeyboardAvodingContainer>
      <View className="pb-20">
        <AppText typeStyle="H3">이메일을 입력해주세요.</AppText>
      </View>
      <FlexContainer gapSize="large">
        <Input
          inputMode="email"
          placeholder="ex) ohdy@ohdy.co.kr"
          value={email}
          onChangeText={setEmail}
        />
        <Btn
          label="이메일로 인증 코드 요청"
          onPress={handleSendEmail}
          disabled={disabled}
        />
      </FlexContainer>
    </KeyboardAvodingContainer>
  );
}

export default EmailForm;
