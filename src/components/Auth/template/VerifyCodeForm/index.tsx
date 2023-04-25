import {useMutation} from '@tanstack/react-query';
import {verifyCode} from 'apis/auth';
import Btn from 'components/@base/Btn';
import FlexView from 'components/@base/FlexView';
import KeyboardAvodingContainer from 'components/@base/KeyboardAvoidingContainer';
import GuideText from 'components/Auth/module/GudieText';
import VerifyCodeInput from 'components/Auth/module/VerifyCodeInput';
import useDisabled from 'hooks/useDisabled';
import useLogin from 'hooks/useLogin';
import useToast from 'hooks/useToast';
import React, {useState} from 'react';
import {View} from 'react-native';
import useAuthStore from 'stores/useAuthStore';
import {getErrorMessage} from 'utils/error';

function VerifyCodeForm() {
  const {email, openPolicySheet} = useAuthStore();
  const [code, setCode] = useState('');
  const disabled = useDisabled([code.length < 4]);
  const {showToast} = useToast();
  const login = useLogin();
  const {mutate, isLoading} = useMutation(verifyCode, {
    onSuccess: async data => {
      if (data) await login(data);
      else openPolicySheet();
    },
    onError: err => showToast({type: 'error', message: getErrorMessage(err)}),
  });

  const handlePress = () => {
    mutate({email, code: parseInt(code)});
  };

  return (
    <KeyboardAvodingContainer>
      <View className="flex-1 p-4">
        <GuideText title={[`${email}(으)로`, '인증코드가 발송되었습니다.']} />
        <FlexView gapSize="large" className="flex-1">
          <VerifyCodeInput value={code} onChangeText={setCode} />
          <Btn
            label="인증하기"
            onPress={handlePress}
            disabled={disabled || isLoading}
          />
        </FlexView>
      </View>
    </KeyboardAvodingContainer>
  );
}

export default VerifyCodeForm;
