import {useNavigation} from '@react-navigation/native';
import SvgIcon from 'components/@base/SvgIcon';
import React from 'react';
import {Pressable} from 'react-native';

type BackProps = {
  onPress?: () => void;
};

function Back({onPress}: BackProps) {
  const {goBack} = useNavigation();

  return (
    <Pressable onPress={onPress ?? goBack} className="p-2 m-[-8px]">
      <SvgIcon name="chevronLeft" size={32} />
    </Pressable>
  );
}

export default Back;
