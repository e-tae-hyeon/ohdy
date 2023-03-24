import {useNavigation} from '@react-navigation/native';
import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import Btn from 'components/@base/Btn';
import FlexContainer from 'components/@base/FlexContainer';
import KeyboardAvoidingContainer from 'components/@base/KeyboardAvoidingContainer';
import useDisabled from 'hooks/useDisabled';
import {AuthGroupNavigationProp} from 'navigations/RootStack/types';
import React from 'react';
import {View} from 'react-native';
import useAuthStore from 'stores/useAuthStore';
import BrithDatePicker from '../BrithDatePicker';
import GenderSelector from '../GenderSelector';

function UserInfoForm() {
  const {brithDate, gender, setBrithDate, setGender} = useAuthStore();
  const disabled = useDisabled([!!brithDate, !!gender]);
  const {navigate} = useNavigation<AuthGroupNavigationProp>();

  const handleNext = () => {
    navigate('Nickname');
  };

  return (
    <KeyboardAvoidingContainer>
      <View className="p-4">
        <View className="py-20">
          <FlexContainer gapSize="small">
            <AppText typeStyle="H3">생년월일 및 성별</AppText>
            <AppText typeStyle="B1" color={colors.gray[400]}>
              회원님의 취향 맞춤 장소를 찾는 데 도움이 되어요.
            </AppText>
          </FlexContainer>
        </View>
        <FlexContainer gapSize="large">
          <FlexContainer>
            <BrithDatePicker date={brithDate} setDate={setBrithDate} />
            <GenderSelector selected={gender} onSelect={setGender} />
          </FlexContainer>
          <Btn label="계속하기" onPress={handleNext} disabled={disabled} />
        </FlexContainer>
      </View>
    </KeyboardAvoidingContainer>
  );
}

export default UserInfoForm;
