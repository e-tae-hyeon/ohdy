import {useNavigation} from '@react-navigation/native';
import {checkAbleNickname} from 'apis/auth';
import Btn from 'components/@base/Btn';
import FlexContainer from 'components/@base/FlexContainer';
import Input from 'components/@base/Input';
import KeyboardAvoidingContainer from 'components/@base/KeyboardAvoidingContainer';
import GuideText from 'components/Auth/module/GudieText';
import useDisabled from 'hooks/useDisabled';
import useToast from 'hooks/useToast';
import {CreateProfileGroupNavigationProp} from 'navigations/RootStack/types';
import React from 'react';
import {View} from 'react-native';
import useCreateProfileStore from 'stores/useCreateProfileStore';
import {getErrorMessage} from 'utils/error';

function NicknameForm() {
  const {nickname, setNickname} = useCreateProfileStore();
  const disabled = useDisabled([!!nickname]);
  const {navigate} = useNavigation<CreateProfileGroupNavigationProp>();
  const {showToast} = useToast();

  const handleChangeText = (value: string) => {
    const by = value.replace(/[^a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');
    setNickname(by);
  };

  const handlePress = async () => {
    try {
      await checkAbleNickname(nickname);
      navigate('Keywords');
    } catch (err) {
      showToast({type: 'error', message: getErrorMessage(err)});
    }
  };

  return (
    <KeyboardAvoidingContainer>
      <View className="flex-1 p-4">
        <GuideText
          title={'이름'}
          description="다른 회원들에게 보여질 이름이에요."
        />
        <FlexContainer gapSize="large" className="flex-1">
          <Input
            placeholder="한글 또는 영어로 구성된 10글자 이내"
            value={nickname}
            onChangeText={handleChangeText}
            autoFocus
            maxLength={10}
          />
          <Btn label="계속하기" onPress={handlePress} disabled={disabled} />
        </FlexContainer>
      </View>
    </KeyboardAvoidingContainer>
  );
}

export default NicknameForm;
