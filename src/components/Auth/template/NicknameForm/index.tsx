import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import {checkAbleNickname} from 'apis/auth';
import Btn from 'components/@base/Btn';
import FlexView from 'components/@base/FlexView';
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
  const disabled = useDisabled([!nickname]);
  const {navigate} = useNavigation<CreateProfileGroupNavigationProp>();
  const {showToast} = useToast();

  const handleChangeText = (value: string) => {
    const by = value.replace(/[^a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '');
    setNickname(by);
  };

  const {mutate, isLoading} = useMutation(checkAbleNickname, {
    onSuccess: () => {
      navigate('Keywords');
    },
    onError: err => showToast({type: 'error', message: getErrorMessage(err)}),
  });

  const handlePress = () => {
    mutate(nickname);
  };

  return (
    <KeyboardAvoidingContainer>
      <View className="flex-1 p-4">
        <GuideText
          title={'닉네임'}
          description="다른 회원들에게 보여질 닉네임이에요."
        />
        <FlexView gapSize="large" className="flex-1">
          <Input
            placeholder="한글 또는 영어로 구성된 10글자 이내"
            value={nickname}
            onChangeText={handleChangeText}
            autoFocus
            maxLength={10}
          />
          <Btn
            label="계속하기"
            onPress={handlePress}
            disabled={disabled || isLoading}
          />
        </FlexView>
      </View>
    </KeyboardAvoidingContainer>
  );
}

export default NicknameForm;
