import {useNavigation} from '@react-navigation/native';
import {verifyCode} from 'apis/auth';
import AppText from 'components/@base/AppText';
import Btn from 'components/@base/Btn';
import FlexContainer from 'components/@base/FlexContainer';
import KeyboardAvodingContainer from 'components/@base/KeyboardAvoidingContainer';
import useDisabled from 'hooks/useDisabled';
import useToast from 'hooks/useToast';
import {AuthGroupNavigationProp} from 'navigations/RootStack/types';
import React, {useState} from 'react';
import {View} from 'react-native';
import useAuthStore from 'stores/useAuthStore';
import {getErrorMessage} from 'utils/error';
import VerifyCodeInput from '../VerifyCodeInput';

function VerifyCodeForm() {
  const {email} = useAuthStore();
  const [code, setCode] = useState('');
  const disabled = useDisabled([code.length === 4]);
  const {showToast} = useToast();
  const {navigate} = useNavigation<AuthGroupNavigationProp>();

  const handleVerifyCode = async () => {
    try {
      const authResult = await verifyCode({email, code: parseInt(code)});

      if (authResult) {
        // handle login
      } else {
        navigate('UserInfo');
      }
    } catch (err) {
      showToast({type: 'error', message: getErrorMessage(err)});
    }
  };

  return (
    <KeyboardAvodingContainer>
      <View className="p-4">
        <View className="py-20">
          <AppText typeStyle="H3">{email}(으)로</AppText>
          <AppText typeStyle="H3">인증코드가 발송되었습니다.</AppText>
        </View>
        <FlexContainer gapSize="large">
          <VerifyCodeInput value={code} onChangeText={setCode} />
          <Btn
            label="인증하기"
            onPress={handleVerifyCode}
            disabled={disabled}
          />
        </FlexContainer>
      </View>
    </KeyboardAvodingContainer>
  );
}

export default VerifyCodeForm;
