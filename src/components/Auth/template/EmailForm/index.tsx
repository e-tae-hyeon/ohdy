import {useNavigation} from '@react-navigation/native';
import {sendEmail} from 'apis/auth';
import Btn from 'components/@base/Btn';
import FlexContainer from 'components/@base/FlexContainer';
import Input from 'components/@base/Input';
import KeyboardAvodingContainer from 'components/@base/KeyboardAvoidingContainer';
import GuideText from 'components/Auth/module/GudieText';
import useDisabled from 'hooks/useDisabled';
import useToast from 'hooks/useToast';
import {AuthGroupNavigationProp} from 'navigations/RootStack/types';
import React from 'react';
import {View} from 'react-native';
import useAuthStore from 'stores/useAuthStore';
import {getErrorMessage} from 'utils/error';
import validator from 'validator';

function EmailForm() {
  const {email, setEmail} = useAuthStore();
  const disabled = useDisabled([validator.isEmail(email)]);
  const {showToast, hideToast} = useToast();
  const {navigate} = useNavigation<AuthGroupNavigationProp>();

  const handlePress = () => {
    try {
      hideToast();
      sendEmail(email);
      navigate('VerifyCode');
    } catch (err) {
      showToast({type: 'error', message: getErrorMessage(err)});
    }
  };

  return (
    <KeyboardAvodingContainer>
      <View className="flex-1 p-4">
        <GuideText title={'이메일을 입력해주세요.'} />
        <FlexContainer gapSize="large" className="flex-1">
          <Input
            inputMode="email"
            placeholder="ex) ohdy@ohdy.co.kr"
            value={email}
            onChangeText={setEmail}
            autoFocus
          />
          <Btn
            label="이메일로 인증 코드 요청"
            onPress={handlePress}
            disabled={disabled}
          />
        </FlexContainer>
      </View>
    </KeyboardAvodingContainer>
  );
}

export default EmailForm;
