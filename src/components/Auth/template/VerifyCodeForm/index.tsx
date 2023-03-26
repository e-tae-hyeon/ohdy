import {verifyCode} from 'apis/auth';
import Btn from 'components/@base/Btn';
import FlexContainer from 'components/@base/FlexContainer';
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
  const disabled = useDisabled([code.length === 4]);
  const {showToast} = useToast();
  const login = useLogin();

  const handlePress = async () => {
    try {
      const userData = await verifyCode({email, code: parseInt(code)});

      if (userData) {
        // handle login
        await login(userData);
      } else {
        // handle register
        openPolicySheet();
      }
    } catch (err) {
      showToast({type: 'error', message: getErrorMessage(err)});
    }
  };

  return (
    <KeyboardAvodingContainer>
      <View className="flex-1 p-4">
        <GuideText title={[`${email}(으)로`, '인증코드가 발송되었습니다.']} />
        <FlexContainer gapSize="large" className="flex-1">
          <VerifyCodeInput value={code} onChangeText={setCode} />
          <Btn label="인증하기" onPress={handlePress} disabled={disabled} />
        </FlexContainer>
      </View>
    </KeyboardAvodingContainer>
  );
}

export default VerifyCodeForm;
