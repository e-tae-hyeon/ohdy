import {useNavigation} from '@react-navigation/native';
import Btn from 'components/@base/Btn';
import FlexContainer from 'components/@base/FlexContainer';
import KeyboardAvoidingContainer from 'components/@base/KeyboardAvoidingContainer';
import BrithDatePicker from 'components/Auth/module/BrithDatePicker';
import GenderSelector from 'components/Auth/module/GenderSelector';
import GuideText from 'components/Auth/module/GudieText';
import useDisabled from 'hooks/useDisabled';
import {AuthGroupNavigationProp} from 'navigations/RootStack/types';
import React from 'react';
import {View} from 'react-native';
import useAuthStore from 'stores/useAuthStore';

function UserInfoForm() {
  const {brithDate, gender, setBrithDate, setGender} = useAuthStore();
  const disabled = useDisabled([!!brithDate, !!gender]);
  const {navigate} = useNavigation<AuthGroupNavigationProp>();

  const handlePress = () => {
    navigate('Nickname');
  };

  return (
    <KeyboardAvoidingContainer>
      <View className="flex-1 p-4">
        <GuideText
          title={'생년월일 및 성별'}
          description={'회원님의 취향 맞춤 장소를 찾는 데 도움이 되어요.'}
        />
        <FlexContainer gapSize="large" className="flex-1">
          <FlexContainer>
            <BrithDatePicker date={brithDate} setDate={setBrithDate} />
            <GenderSelector selected={gender} onSelect={setGender} />
          </FlexContainer>
          <Btn label="계속하기" onPress={handlePress} disabled={disabled} />
        </FlexContainer>
      </View>
    </KeyboardAvoidingContainer>
  );
}

export default UserInfoForm;
