import {useNavigation} from '@react-navigation/native';
import Btn from 'components/@base/Btn';
import FlexView from 'components/@base/FlexView';
import {SettingsGroupNavigationProp} from 'navigations/RootStack/types';
import React from 'react';

function UserToGoActions() {
  const {navigate} = useNavigation<SettingsGroupNavigationProp>();

  const handlePressSetting = () => {
    navigate('Settings');
  };

  const handlePressFeedback = () => {
    navigate('Feedback');
  };

  return (
    <FlexView>
      <Btn label="설정" onPress={handlePressSetting} />
      <Btn label="오디에게 피드백 남기기" onPress={handlePressFeedback} />
    </FlexView>
  );
}

export default UserToGoActions;
